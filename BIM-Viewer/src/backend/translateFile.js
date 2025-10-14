import fetch from "node-fetch";

// 4. Iniciar tradução para SVF
export async function translateFile(token, objectId) {
  console.log("Iniciando tradução...");
  const urn = Buffer.from(objectId).toString("base64");

  await fetch("https://developer.api.autodesk.com/modelderivative/v2/designdata/job", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token.access_token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      input: { urn },
      output: { formats: [{ type: "svf", views: ["2d", "3d"] }] }
    })
  });

  return urn;
}

// 5. Verificar status da tradução
export async function checkTranslationStatus(token, urn) {
  console.log("Verificando status da tradução...");

  const resp = await fetch(
    `https://developer.api.autodesk.com/modelderivative/v2/designdata/${urn}/manifest`,
    {
      method: "GET",
      headers: { "Authorization": `Bearer ${token.access_token}` }
    }
  );

  const data = await resp.json();

  if (data.status === "success") {
    console.log("✅ Tradução concluída com sucesso!");
  } else if (data.status === "inprogress") {
    console.log("⏳ Tradução em andamento...");
  } else if (data.status === "failed") {
    console.error("❌ Tradução falhou:", data);
  }

  return data;
}
