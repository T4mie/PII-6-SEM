// backend.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import fs from "fs";

// Importando funções modularizadas
import { getToken } from "./src/backend/createToken.js";
import { createBucket } from "./src/backend/createBucket.js";
import { uploadFile } from "./src/backend/uploadFile.js";
import { translateFile, checkTranslationStatus } from "./src/backend/translateFile.js";
import { uploadImage } from "./src/backend/uploadImage.js";
import { compareImages } from "./src/backend/compareImages.js";

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

dotenv.config();

// ⚙️ Configuração global de middlewares
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
}));

// ✅ Necessário para interpretar JSON no corpo das requisições
app.use(express.json());

// Configuração do multer
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
    if (req.body.imageUrl) {
      console.log("Recebida URL de imagem do Firebase:", req.body.imageUrl);
      return res.json({ imageUrl: req.body.imageUrl });
    }

    if (!req.file) throw new Error("Nenhum arquivo ou URL enviado.");
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

    if (!img1 || !img2) throw new Error("Arquivos não recebidos corretamente pelo servidor");

    const result = await compareImages(img1, img2);
    fs.unlinkSync(img1);
    fs.unlinkSync(img2);

    res.json(result);
  } catch (err) {
    console.error("ERRO DETALHADO:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Corrigido — agora req.body.url será reconhecido corretamente
app.post("/api/fetch-image", async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "URL ausente" });

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Falha ao baixar imagem");
    const buffer = await response.arrayBuffer();

    res.setHeader("Content-Type", response.headers.get("content-type") || "image/jpeg");
    res.send(Buffer.from(buffer));
  } catch (err) {
    console.error("Erro ao buscar imagem:", err);
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
  console.log(`Servidor rodando em http://localhost:${port}`)
);
