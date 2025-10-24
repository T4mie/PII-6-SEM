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

dotenv.config();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Configuração do multer para upload temporário
const upload = multer({ dest: "uploads/" });

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

app.get("/api/token", async (req, res) => {
  try {
    res.json(token);
  } catch (err) {
    console.error("Erro em /api/token:", err);
    res.status(500).json({ error: "Erro ao obter token" });
  }
});

app.post("/upload/image", upload.single("file"), async (req, res) => {
  try {
    console.log("Fazendo upload da imagem:", req.file.originalname);

    // Faz upload da imagem
    const result = await uploadImage(token, req.file.path);

    // Remove o arquivo temporário local
    fs.unlinkSync(req.file.path);

    res.json(result);
  } catch (err) {
    console.error("Erro no upload da imagem:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/upload/file", upload.single("file"), async (req, res) => {
  try {

    console.log("Recebendo arquivo RVT:", req.file.originalname);

    // Upload do arquivo RVT
    const result = await uploadFile(token, req.file.path);

    // Tradução do arquivo e verificação do status
    const urn = await translateFile(token, result.objectId);
    await checkTranslationStatus(token, urn);

    // Remove o arquivo local temporário
    fs.unlinkSync(req.file.path);

    console.log("Upload e tradução concluídos com sucesso!");
    res.json({ urn });
  } catch (err) {
    console.error("Erro no upload RVT:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/compare", upload.fields([{ name: "img1" }, { name: "img2" }]), async (req, res) => {
  try {
    const img1 = req.files["img1"][0].path;
    const img2 = req.files["img2"][0].path;

    const result = await compareImages(img1, img2);

    // Limpa arquivos temporários
    fs.unlinkSync(img1);
    fs.unlinkSync(img2);

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao comparar imagens" });
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
