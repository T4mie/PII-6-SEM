// src/backend/compareImages.js
import dotenv from "dotenv";
import OpenAI from "openai";
import fs from "fs";

dotenv.config(); // <--- garante que o .env é lido

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function compareImages(imagePath1, imagePath2) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Compare visualmente as duas imagens e diga apenas a porcentagem (0 a 100) de quão semelhantes são.",
            },
            {
              type: "image_url",
              image_url: `data:image/jpeg;base64,${fs.readFileSync(imagePath1, { encoding: "base64" })}`,
            },
            {
              type: "image_url",
              image_url: `data:image/jpeg;base64,${fs.readFileSync(imagePath2, { encoding: "base64" })}`,
            },
          ],
        },
      ],
    });

    const resultText = response.choices[0].message.content.trim();
    return { similarity: resultText };
  } catch (error) {
    console.error("Erro na comparação de imagens:", error);
    throw new Error("Falha ao comparar imagens");
  }
}
