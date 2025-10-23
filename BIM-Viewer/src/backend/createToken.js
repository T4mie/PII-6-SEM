// src/backend/createToken.js

import fetch from "node-fetch";

let cachedToken = null; // objeto completo do token
let tokenExpiration = 0; // timestamp de expiração

export async function createToken(client_id, client_secret) {
  console.log("Gerando novo token Forge...");

  const basicAuth = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const resp = await fetch("https://developer.api.autodesk.com/authentication/v2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json",
      "Authorization": `Basic ${basicAuth}`,
    },
    body: "grant_type=client_credentials&scope=data:read data:write bucket:create bucket:read",
  });

  const result = await resp.json();

  if (!resp.ok) {
    console.error("Erro ao obter token:", result);
    throw new Error(`Falha ao gerar token: ${result.error_description || result}`);
  }

  // guarda o objeto completo (não apenas a string)
  cachedToken = result;
  tokenExpiration = Date.now() + (result.expires_in - 60) * 1000; // renova 1 min antes

  console.log("Token obtido com sucesso:", result);
  return result;
}

export async function getToken(client_id, client_secret) {
  const now = Date.now();

  if (cachedToken && now < tokenExpiration) {
    console.log("Reutilizando token válido do cache.");
    return cachedToken; // retorna o objeto completo
  }

  console.log("Token expirado ou inexistente. Gerando novo...");
  const result = await createToken(client_id, client_secret);
  return result; // retorna o objeto, não apenas .access_token
}
