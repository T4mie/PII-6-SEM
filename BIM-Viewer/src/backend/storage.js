// storage.js
import { ref, listAll, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase.js";

/**
 * Verifica se uma pasta existe no Firebase Storage
 * @param {string} codigo - Nome da pasta
 * @returns {Promise<boolean>} - true se a pasta existir
 */
export async function checkIfFolderExists(codigo) {
  try {
    const folderRef = ref(storage, `construcoes/${codigo}`);
    const result = await listAll(folderRef);
    return result.items.length > 0 || result.prefixes.length > 0;
  } catch (err) {
    console.error("Erro ao verificar pasta:", err);
    return false;
  }
}

/**
 * Faz upload de uma imagem para o Firebase Storage
 * @param {File} file - Arquivo da imagem
 * @param {string} codigo - Código (pasta)
 * @param {boolean} isAdmin - Se o usuário é admin
 */
export async function uploadConstructionPhoto(file, codigo, isAdmin = false) {
  if (!file || !codigo) throw new Error("Arquivo ou código inválido");

  const folderExists = await checkIfFolderExists(codigo);
  if (!folderExists && !isAdmin) {
    throw new Error(
      `A pasta "${codigo}" não existe. Apenas o administrador pode criá-la.`
    );
  }

  try {
    const fileRef = ref(storage, `construcoes/${codigo}/${file.name}`);
    await uploadBytes(fileRef, file);
    const downloadURL = await getDownloadURL(fileRef);
    return downloadURL;
  } catch (error) {
    console.error("Erro no upload da imagem:", error);
    throw error;
  }
}

/**
 * Lista todas as pastas existentes em /construcoes
 * @returns {Promise<string[]>} - Lista de nomes de pastas
 */
export async function listConstructionFolders() {
  try {
    const rootRef = ref(storage, "construcoes");
    const result = await listAll(rootRef);
    return result.prefixes.map((folderRef) => folderRef.name);
  } catch (error) {
    console.error("Erro ao listar pastas:", error);
    throw error;
  }
}
