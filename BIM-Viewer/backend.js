// backend.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import fs from "fs";
import axios from "axios"; // novo: axios para baixar imagens de forma robusta

// Importando funções modularizadas
import { getToken } from "./src/backend/createToken.js";
import { createBucket } from "./src/backend/createBucket.js";
import { uploadFile } from "./src/backend/uploadFile.js";
import { translateFile, checkTranslationStatus } from "./src/backend/translateFile.js";
import { uploadImage } from "./src/backend/uploadImage.js";
import { compareImages } from "./src/backend/compareImages.js";

dotenv.config();

const app = express();
const port = 3000;
let token = null;

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://t4mie.github.io",
  "https://t4mie.github.io/PII-6-SEM/",
  "https://pii-6-sem.onrender.com",
];


app.use(cors({
  origin: function (origin, callback) {
    // Permite requisições sem "origin" (ex: Postman, backend interno)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

// necessário para receber JSON no body (ex.: fetch com Content-Type: application/json)
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));

// Configuração do multer para upload temporário
const upload = multer({ dest: "uploads/" });

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

app.get("/api/token", async (req, res) => {
  try {
    if (!token) {
      console.warn("Token ainda não inicializado no servidor!");
      return res.status(500).json({ error: "Token não disponível no momento" });
    }
    res.json(token);
  } catch (err) {
    console.error("Erro em /api/token:", err);
    res.status(500).json({ error: "Erro ao obter token" });
  }
});

app.post("/upload/image", upload.single("file"), async (req, res) => {
  try {
    // Caso venha via Firebase (URL string)
    if (req.body.imageUrl) {
      console.log("Recebida URL de imagem do Firebase:", req.body.imageUrl);
      return res.json({ imageUrl: req.body.imageUrl });
    }

    // Caso venha via arquivo físico (upload comum)
    if (!req.file) {
      throw new Error("Nenhum arquivo ou URL enviado.");
    }

    console.log("Fazendo upload da imagem:", req.file.originalname);

    const result = await uploadImage(token, req.file.path);
    fs.unlinkSync(req.file.path);

    res.json(result);
  } catch (err) {
    console.error("Erro no upload da imagem:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/upload/file", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) throw new Error("Arquivo não enviado");
    console.log("Recebendo arquivo:", req.file.originalname);

    // Upload do arquivo
    const result = await uploadFile(token, req.file.path);

    // Tradução do arquivo e verificação do status
    const urn = await translateFile(token, result.objectId);
    await checkTranslationStatus(token, urn);

    // Remove o arquivo local temporário
    fs.unlinkSync(req.file.path);

    console.log("Upload e tradução concluídos com sucesso!");
    res.json({ urn });
  } catch (err) {
    console.error("Erro no upload:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/compare", upload.fields([{ name: "img1" }, { name: "img2" }]), async (req, res) => {
  try {
    console.log("Arquivos recebidos:", req.files);
    console.log("OPENAI_API_KEY existe?", !!process.env.OPENAI_API_KEY);

    const img1 = req.files?.["img1"]?.[0]?.path;
    const img2 = req.files?.["img2"]?.[0]?.path;

    if (!img1 || !img2) {
      throw new Error("Arquivos não recebidos corretamente pelo servidor");
    }

    const result = await compareImages(img1, img2);
    fs.unlinkSync(img1);
    fs.unlinkSync(img2);

    res.json(result);
  } catch (err) {
    console.error("ERRO DETALHADO:", err);
    res.status(500).json({ error: err.message });
  }
});

// Rota atualizada para buscar imagem por URL (usa axios)
app.post("/api/fetch-image", async (req, res) => {
  try {
    const { url } = req.body || {};
    if (!url) {
      console.warn("/api/fetch-image chamado sem 'url' no body");
      return res.status(400).json({ error: "URL ausente" });
    }

    console.log("Tentando baixar imagem:", url);

    // Usa axios para garantir responseType arraybuffer (binário)
    const response = await axios.get(url, {
      responseType: "arraybuffer",
      timeout: 20000, // 20s timeout
      headers: {
        // Em alguns casos, Firebase exige um User-Agent "normal"
        "User-Agent": "Mozilla/5.0 (compatible; Node.js server)",
        Accept: "image/*",
      },
      validateStatus: (status) => status >= 200 && status < 300, // aceita 2xx
    });

    const contentType = response.headers["content-type"] || "image/jpeg";
    const buffer = Buffer.from(response.data);

    res.setHeader("Content-Type", contentType);
    res.send(buffer);
  } catch (err) {
    console.error("Erro ao buscar imagem (/api/fetch-image):", err && err.message ? err.message : err);
    // Se for erro de status do axios, incluir status e mensagem
    if (err.response) {
      console.error("Status recebido ao buscar imagem:", err.response.status, err.response.statusText);
    }
    res.status(500).json({ error: "Falha ao buscar imagem" });
  }
});

(async () => {
  try {
    token = await getToken(client_id, client_secret);
    await createBucket(token);
    console.log("Token e bucket criados no startup do servidor!");
  } catch (err) {
    console.error("Falha ao criar token/bucket no início:", err);
  }
})();

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port} — porta real: ${port}`)
);
