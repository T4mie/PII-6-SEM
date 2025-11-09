// src/backend/compareImages.js
import dotenv from "dotenv";
import OpenAI from "openai";
import fs from "fs";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function compareImages(imagePath1, imagePath2) {
  try {
    const img1Base64 = fs.readFileSync(imagePath1, { encoding: "base64" });
    const img2Base64 = fs.readFileSync(imagePath2, { encoding: "base64" });

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Você faz parte de um sistema automatizado de monitoração de canteiro de obras que apenas avalia o andamento da obra, independente da cor e do material. Compare visualmente a foto da construção real com a imagem do modelo do projeto e retorne apenas um JSON no seguinte formato:
{
  "progresso": "<porcentagem de similaridade de 0 a 100>",
  "diferencas": [
    "<diferença 1>",
    "<diferença 2>",
    "<diferença 3>",
    "... mais diferenças se houver ..."
  ],
  "fase_construcao": "<descrição da fase da construção>"
}
Instruções:
1. Compare a imagem da construção real com a do modelo 3d, entendendo que é uma verificação do andamento de uma obra real.
2. Calcule a porcentagem (0 a 100) que representa o quão semelhantes a cosntrução real está do modelo do projeto, com o objetivo de entender o progresso da obra, o que está faltando e o que está distoante do objetivo original do projeto.
3. Liste em tópicos as diferenças entre o modelo 3d e a construção real, não considerando as cores, material nem transparência.
4. Descreva em que fase da construção a foto enviada se encontra, considerando que o modelo corresponde a 100% (obra concluída).
5. Desconsidere as diferenças de cor, transparência e material, pois estamos utilizando um mock para representar a construção real.
Retorne somente o JSON, sem explicações ou texto extra.`,
            },
            {
              type: "image_url",
              image_url: { url: `data:image/jpeg;base64,${img1Base64}` },
            },
            {
              type: "image_url",
              image_url: { url: `data:image/jpeg;base64,${img2Base64}` },
            },
          ],
        },
      ],
    });

    let resultText = "";

    try {
      const msgContent = response.choices[0].message.content;

      if (typeof msgContent === "string") {
        resultText = msgContent.trim();
      } else if (Array.isArray(msgContent)) {
        const textBlock = msgContent.find((c) => c.type === "text");
        if (textBlock?.text) resultText = textBlock.text.trim();
      }

      // 🔹 Remove possíveis blocos de markdown ```json ... ```
      resultText = resultText
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      // 🔹 Faz o parse para objeto JSON real
      const jsonResult = JSON.parse(resultText);

      return { similarity: jsonResult };
    } catch (e) {
      console.warn("Erro ao interpretar JSON:", e, "\nConteúdo recebido:", resultText);
      return { similarity: null, error: "Falha ao interpretar JSON" };
    }
  } catch (error) {
    console.error("Erro na comparação de imagens:", error);
    throw new Error("Falha ao comparar imagens");
  }
}
