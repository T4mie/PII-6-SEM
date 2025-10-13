// backend.js
import multer from "multer";
import express from "express";
import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const port = 3000;
let token = null;
dotenv.config();

app.use(cors({
  origin: "http://localhost:5173"
}));

// Substitua com suas credenciais APS (Forge)
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

// 1. Função para gerar token (2-legged OAuth)
// documentação de como pegar o token: https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/
async function createToken() {
  console.log("Pegando o token...");

  // Converte para Base64 → client_id:client_secret
  const basicAuth = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const resp = await fetch("https://developer.api.autodesk.com/authentication/v2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json",
      "Authorization": `Basic ${basicAuth}`,
    },
    body: "grant_type=client_credentials&scope=data:read data:write bucket:create bucket:read"
  });

  const result = await resp.json();
  console.log("Token obtido: ", result);
  return result;
}

// documentação de como criar um bucket: https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-POST/
// 2. Criar bucket (se ainda não existir)
async function createBucket(token) {
  console.log("Criando o Bucket..");

  const resp = await fetch("https://developer.api.autodesk.com/oss/v2/buckets", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token.access_token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      bucketKey: "meu-bucket-rvt",
      policyKey: "persistent"
    })
  });

  console.log("Status da resposta:", resp.status);

  // tenta ler como JSON, mas se não for válido imprime como texto bruto
  const text = await resp.text();
  const data = JSON.parse(text);
  console.log("Resposta JSON:", data);
}


// documentação de como fazer upload:
// https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-GET/
// https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-POST/
// 3. Fazer upload do arquivo .rvt usando signed URL
async function uploadFile(token) {
  console.log("Fazendo upload do arquivo...");

  const bucketKey = "meu-bucket-rvt";
  const objectKey = "meu_arquivo.rvt";

  // 1. Pedir URL assinada para upload
  const signedResp = await fetch(
    `https://developer.api.autodesk.com/oss/v2/buckets/${bucketKey}/objects/${objectKey}/signeds3upload`,
    {
      method: "GET",
      headers: { "Authorization": `Bearer ${token.access_token}` },
    }
  );

  const signedData = await signedResp.json();
  const uploadKey = signedData.uploadKey;
  console.log("Signed URL recebido:", signedData);

  if (!signedData.urls || signedData.urls.length === 0) {
    throw new Error("Não foi possível obter a URL assinada para upload.");
  }

  const signedUrl = signedData.urls[0]; // single-part upload

  // 2. Fazer upload do arquivo direto para a URL assinada
  const file = fs.readFileSync("./racbasicsampleproject.rvt");
  const uploadResp = await fetch(signedUrl, {
    method: "PUT",
    body: file
  });

  if (!uploadResp.ok) {
    const errText = await uploadResp.text();
    throw new Error(`Falha no upload para S3: ${uploadResp.status} - ${errText}`);
  }

  console.log("Upload feito com sucesso no S3 temporário!");

  // Capturar o eTag retornado pelo S3
  const eTag = uploadResp.headers.get("etag");
  console.log("ETag retornado pelo S3:", eTag);

  // 3. Confirmar o upload no OSS
  const completeResp = await fetch(
    `https://developer.api.autodesk.com/oss/v2/buckets/${bucketKey}/objects/${objectKey}/signeds3upload`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token.access_token}`,
        "Content-Type": "application/json",
        "x-ads-meta-Content-Type": "application/vnd.autodesk.rvt" // tipo específico para Revit
      },
      body: JSON.stringify({
        uploadKey: uploadKey,
        size: file.length,
        eTags: [eTag.replace(/"/g, "")] // enviar o eTag do S3 sem aspas
      })
    }
  );

  const completeData = await completeResp.json();
  console.log("Upload completo confirmado no OSS:", completeData);

  return completeData;
}

// documentação de como fazer a tradução:
// https://aps.autodesk.com/en/docs/model-derivative/v2/developers_guide/basics/preperation/
// 4. Iniciar tradução para SVF
async function translateFile(token, objectId) {
  console.log("Iniciando tradução...");
  const urn = Buffer.from(objectId).toString("base64");
  await fetch("https://developer.api.autodesk.com/modelderivative/v2/designdata/job", {
    method: "POST",
    headers: { "Authorization": `Bearer ${token.access_token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      input: { urn },
      output: { formats: [{ type: "svf", views: ["2d", "3d"] }] }
    })
  });
  return urn;
}

// 5. Verificar status da tradução
async function checkTranslationStatus(token, urn) {
  console.log("Verificando status da tradução...");

  const resp = await fetch(
    `https://developer.api.autodesk.com/modelderivative/v2/designdata/${urn}/manifest`,
    {
      method: "GET",
      headers: { "Authorization": `Bearer ${token.access_token}` }
    }
  );

  const data = await resp.json();
  console.log("Manifesto da tradução:", JSON.stringify(data, null, 2));

  if (data.status === "success") {
    console.log("✅ Tradução concluída com sucesso!");
  } else if (data.status === "inprogress") {
    console.log("⏳ Tradução em andamento...");
  } else if (data.status === "failed") {
    console.error("❌ Tradução falhou:", data);
  }

  return data;
}


// 6. Endpoint que retorna o URN
app.get("/urn", async (req, res) => {
  try {
    token = await createToken();
    await createBucket(token);
    const result = await uploadFile(token);
    const urn = await translateFile(token, result.objectId);
    await checkTranslationStatus(token, urn)
    res.json({ urn });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao processar arquivo" });
  }
});

// 7. Endpoint para retornar token (usado pelo Viewer React)
app.get("/api/token", async (req, res) => {
  res.json(token);
});

async function safeJson(resp) {
  const text = await resp.text();
  try {
    return JSON.parse(text);
  } catch {
    console.error("Resposta não-JSON:", text);
    throw new Error("Falha na requisição: " + resp.url);
  }
}

const upload = multer({ dest: "uploads/" });

// 📸 Upload da screenshot para Autodesk OSS via signed URL
app.post("/upload-screenshot", upload.single("screenshot"), async (req, res) => {
  try {
    const bucketKey = "meu-bucket-rvt";
    const objectKey = `screenshot_${Date.now()}.png`; // nome único
    const fileBuffer = fs.readFileSync(req.file.path);

    // 1️⃣ Cria token (ou usa existente)
    const token = await createToken();

    // 2️⃣ Pede URL assinada para upload
    const signedResp = await fetch(
      `https://developer.api.autodesk.com/oss/v2/buckets/${bucketKey}/objects/${objectKey}/signeds3upload?minutesExpiration=5`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token.access_token}` },
      }
    );

    if (!signedResp.ok) {
      const errText = await signedResp.text();
      throw new Error(`Erro ao gerar signed URL: ${signedResp.status} - ${errText}`);
    }

    const signedData = await signedResp.json();
    const signedUrl = signedData.urls[0];
    const uploadKey = signedData.uploadKey;

    // 3️⃣ Faz o upload da imagem via PUT na URL assinada
    const uploadResp = await fetch(signedUrl, {
      method: "PUT",
      headers: { "Content-Type": "image/png" },
      body: fileBuffer,
    });

    if (!uploadResp.ok) {
      const errText = await uploadResp.text();
      throw new Error(`Erro no upload: ${uploadResp.status} - ${errText}`);
    }

    const eTag = uploadResp.headers.get("etag").replace(/"/g, "");

    // 4️⃣ Confirma o upload (POST)
    const completeResp = await fetch(
      `https://developer.api.autodesk.com/oss/v2/buckets/${bucketKey}/objects/${objectKey}/signeds3upload`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.access_token}`,
          "Content-Type": "application/json",
          "x-ads-meta-Content-Type": "image/png",
        },
        body: JSON.stringify({
          uploadKey,
          size: fileBuffer.length,
          eTags: [eTag],
        }),
      }
    );

    const completeData = await completeResp.json();

    if (!completeResp.ok) {
      throw new Error(`Erro ao completar upload: ${completeResp.status} - ${JSON.stringify(completeData)}`);
    }

    fs.unlinkSync(req.file.path); // apaga o arquivo local

    console.log("✅ Screenshot salva com sucesso:", completeData);

    // Retorna o ID ou URL do arquivo salvo
    res.json({
      success: true,
      objectId: completeData.objectId,
      bucketKey: completeData.bucketKey,
      objectKey: completeData.objectKey,
    });
  } catch (err) {
    console.error("❌ Erro ao enviar screenshot:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => console.log(`✅ Servidor rodando em http://localhost:${port}`));
