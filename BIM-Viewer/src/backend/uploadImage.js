// /functions/uploadImage.js
import fs from "fs";
import fetch from "node-fetch";

export async function uploadImage(token, filePath) {
  console.log("Iniciando upload da imagem...");

  const bucketKey = "meu-bucket";
  const objectKey = "minha_imagem.jpg";

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

  if (!signedData.urls || signedData.urls.length === 0) {
    throw new Error("Não foi possível obter a URL assinada para upload.");
  }

  const signedUrl = signedData.urls[0];

  // 2. Fazer upload da imagem para S3
  const file = fs.readFileSync(filePath);
  const uploadResp = await fetch(signedUrl, {
    method: "PUT",
    headers: { "Content-Type": "image/jpeg" },
    body: file,
  });

  if (!uploadResp.ok) {
    const errText = await uploadResp.text();
    throw new Error(`Falha no upload para S3: ${uploadResp.status} - ${errText}`);
  }

  const eTag = uploadResp.headers.get("etag");

  // 3. Confirmar o upload no OSS
  const completeResp = await fetch(
    `https://developer.api.autodesk.com/oss/v2/buckets/${bucketKey}/objects/${objectKey}/signeds3upload`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.access_token}`,
        "Content-Type": "application/json",
        "x-ads-meta-Content-Type": "image/jpeg",
      },
      body: JSON.stringify({
        uploadKey,
        size: file.length,
        eTags: [eTag.replace(/"/g, "")],
      }),
    }
  );

  const completeData = await completeResp.json();
  console.log("Upload completo no OSS:", completeData);

  // Gerar preview base64
  const base64 = file.toString("base64");
  const dataUrl = `data:image/jpeg;base64,${base64}`;

  return { ossData: completeData, imageUrl: dataUrl };
}
