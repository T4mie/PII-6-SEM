// src/backend/createBucket.js

// documentação de como criar um bucket:
// https://aps.autodesk.com/en/docs/data/v2/reference/http/buckets-POST/
import fetch from "node-fetch";

// 2. Criar bucket (se ainda não existir)
export async function createBucket(token) {
  console.log("Criando o Bucket..");

  const resp = await fetch("https://developer.api.autodesk.com/oss/v2/buckets", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token.access_token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      bucketKey: "meu-bucket",
      policyKey: "persistent"
    })
  });

  console.log("Status da resposta:", resp.status);
  const text = await resp.text();

  try {
    const data = JSON.parse(text);
    console.log("Resposta JSON:", data);
  } catch {
    console.log("Resposta não-JSON:", text);
  }
}
