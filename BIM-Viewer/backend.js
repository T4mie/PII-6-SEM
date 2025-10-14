// backend.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import fs from "fs";

// Importando funções modularizadas
import { createToken } from "./src/backend/createToken.js";
import { createBucket } from "./src/backend/createBucket.js";
import { uploadFile } from "./src/backend/uploadFile.js";
import { translateFile, checkTranslationStatus } from "./src/backend/translateFile.js";
import { uploadImage } from "./src/backend/uploadImage.js";

const app = express();
const port = 3000;
let token = null;

dotenv.config();

app.use(cors({
  origin: "http://localhost:5173"
}));

// Configuração do multer para upload temporário de imagens
const upload = multer({ dest: "uploads/" });

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

// Endpoint principal que processa tudo e retorna o URN
app.get("/urn", async (req, res) => {
  try {
    token = await createToken(client_id, client_secret);
    await createBucket(token);
    const result = await uploadFile(token);
    const urn = await translateFile(token, result.objectId);
    await checkTranslationStatus(token, urn);
    res.json({ urn });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao processar arquivo" });
  }
});

// Endpoint para retornar token ao Viewer
app.get("/api/token", async (req, res) => {
  res.json(token);
});

// Novo endpoint para upload de imagem
app.post("/upload/image", upload.single("file"), async (req, res) => {
  try {
    if (!token) {
      token = await createToken(client_id, client_secret);
    }

    // Faz upload da imagem para Autodesk
    const result = await uploadImage(token, req.file.path);

    // Remove o arquivo temporário
    fs.unlinkSync(req.file.path);

    // Retorna o resultado (dados + base64 da imagem)
    res.json(result);
  } catch (err) {
    console.error("Erro no upload da imagem:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
