// src/backend/createToken.js

import fetch from "node-fetch";

// 1. Função para gerar token (2-legged OAuth)
export async function createToken(client_id, client_secret) {
  console.log("Pegando o token...");

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
