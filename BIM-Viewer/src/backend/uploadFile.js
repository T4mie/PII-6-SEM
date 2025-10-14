// src/backend/uploadFile.js

import fetch from "node-fetch";
import fs from "fs";

// 3. Fazer upload do arquivo .rvt usando signed URL
export async function uploadFile(token) {
  console.log("Fazendo upload do arquivo...");

  const bucketKey = "meu-bucket";
  const objectKey = "meu_arquivo.rvt";

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

  const signedUrl = signedData.urls[0];
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

  const eTag = uploadResp.headers.get("etag");
  console.log("ETag retornado pelo S3:", eTag);

  const completeResp = await fetch(
    `https://developer.api.autodesk.com/oss/v2/buckets/${bucketKey}/objects/${objectKey}/signeds3upload`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token.access_token}`,
        "Content-Type": "application/json",
        "x-ads-meta-Content-Type": "application/vnd.autodesk.rvt"
      },
      body: JSON.stringify({
        uploadKey: uploadKey,
        size: file.length,
        eTags: [eTag.replace(/"/g, "")]
      })
    }
  );

  const completeData = await completeResp.json();
  console.log("Upload completo confirmado no OSS:", completeData);

  return completeData;
}
