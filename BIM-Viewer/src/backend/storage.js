// storage.js
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase.js"; // importa a instância inicializada


/**
 * Faz upload de uma imagem para o Firebase Storage
 * @param {File} file - Arquivo da imagem
 * @param {string} codigo - Código da construção
 * @returns {Promise<string>} - URL pública da imagem
 */
export async function uploadConstructionPhoto(file, codigo) {
  if (!file || !codigo) throw new Error("Arquivo ou código inválido");

  try {
    // Cria referência no storage
    const fileRef = ref(storage, `construcoes/${codigo}/${file.name}`);

    // Faz upload
    await uploadBytes(fileRef, file);

    // Obtém a URL pública
    const downloadURL = await getDownloadURL(fileRef);

    return downloadURL;
  } catch (error) {
    console.error("Erro no upload da imagem:", error);
    throw error;
  }
}
