// src/backend/uploadFile.js

// documentação de como fazer upload:
// https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-GET/
// https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-:bucketKey-objects-:objectKey-signeds3upload-POST/

import fetch from "node-fetch";
import fs from "fs";

export async function uploadFile(token, filePath) {
  console.log("Fazendo upload do arquivo:", filePath);

  const bucketKey = "meu-bucket";
  const objectKey = "meu-arquivo.stl"; // usa o nome real do arquivo

  console.log("Object Key:", objectKey);

  // 1. Obter URL assinada
  const signedResp = await fetch(
    `https://developer.api.autodesk.com/oss/v2/buckets/${bucketKey}/objects/${objectKey}/signeds3upload`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token.access_token}` },
    }
  );

  const signedData = await signedResp.json();
  const uploadKey = signedData.uploadKey;
  console.log("Signed URL recebido:", signedData);

  if (!signedData.urls || signedData.urls.length === 0) {
    throw new Error("Não foi possível obter a URL assinada para upload.");
  }

  const signedUrl = signedData.urls[0];

  // 2. Upload para S3
  const file = fs.readFileSync(filePath);
  const uploadResp = await fetch(signedUrl, {
    method: "PUT",
    headers: { "Content-Type": "application/vnd.autodesk.stl" },
    body: file
  });

  if (!uploadResp.ok) {
    const errText = await uploadResp.text();
    throw new Error(`Falha no upload para S3: ${uploadResp.status} - ${errText}`);
  }

  console.log("Upload feito com sucesso no S3 temporário!");
  const eTag = uploadResp.headers.get("etag");

  // 3. Confirmar upload no OSS
  const completeResp = await fetch(
    `https://developer.api.autodesk.com/oss/v2/buckets/${bucketKey}/objects/${objectKey}/signeds3upload`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token.access_token}`,
        "Content-Type": "application/json",
        "x-ads-meta-Content-Type": "application/vnd.autodesk.stl"
      },
      body: JSON.stringify({
        uploadKey,
        size: file.length,
        eTags: [eTag.replace(/"/g, "")]
      })
    }
  );

  const completeData = await completeResp.json();
  console.log("Upload completo confirmado no OSS:", completeData);
  return completeData;
}
