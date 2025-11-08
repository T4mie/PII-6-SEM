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
              text: "Compare visualmente as duas imagens e retorne apenas um JSON no seguinte formato:\n{\n  \"progresso\": \"<porcentagem de similaridade de 0 a 100>\",\n  \"diferencas\": [\n    \"<diferença 1>\",\n    \"<diferença 2>\",\n    \"<diferença 3>\"\n  ],\n  \"fase_construcao\": \"<descrição da fase da construção>\"\n}\nAs instruções são:\n\n1. Compare as duas imagens visualmente.\n2. Calcule a porcentagem (0 a 100) que representa o quão semelhantes elas são.\n3. Liste em tópicos as diferenças entre o modelo e a construção real.\n4. Descreva em que fase da construção a foto enviada se encontra, considerando que o modelo corresponde a 100% (obra concluída).\n5. Desconsidere diferenças de cor e transparência dos materiais.\n\nRetorne somente o JSON, sem comentários ou explicações adicionais.",              
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
      } else if (Array.isArray(msgContent) && msgContent.length > 0) {
        const textBlock = msgContent.find((c) => c.type && c.type.includes("text"));
        if (textBlock && textBlock.text) resultText = textBlock.text.trim();
        else if (msgContent[0].text) resultText = msgContent[0].text.trim();
      } else if (response.choices[0].message?.content?.[0]?.text) {
        resultText = response.choices[0].message.content[0].text.trim();
      }
    } catch (e) {
      console.warn("Não foi possível extrair o texto da resposta do OpenAI:", e);
    }

    return { similarity: resultText };
  } catch (error) {
    console.error("Erro na comparação de imagens:", error);
    throw new Error("Falha ao comparar imagens");
  }
}
