// src/backend/storage.js
import { ref, listAll, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase.js";

/**
 * Verifica se uma pasta existe no Firebase Storage
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
 */
export async function uploadConstructionPhoto(file, codigo, isAdmin = false) {
  if (!file || !codigo) throw new Error("Arquivo ou código inválido");

  const folderExists = await checkIfFolderExists(codigo);
  if (!folderExists && !isAdmin) {
    throw new Error(`A pasta "${codigo}" não existe. Apenas o administrador pode criá-la.`);
  }

  try {
    const fileRef = ref(storage, `construcoes/${codigo}/${file.name}`);
    await uploadBytes(fileRef, file);
    let downloadURL = await getDownloadURL(fileRef);

    // ✅ Corrige URLs antigas (appspot → firebasestorage.app)
    downloadURL = downloadURL.replace("appspot.com", "firebasestorage.app");

    console.log("Imagem enviada com sucesso:", downloadURL);
    return downloadURL;
  } catch (error) {
    console.error("Erro no upload da imagem:", error);
    throw error;
  }
}

/**
 * Lista todas as pastas existentes em /construcoes
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

/**
 * Cria uma nova pasta "vazia" no Firebase Storage
 */
export async function createEmptyFolder(codigo) {
  if (!codigo) throw new Error("Código inválido para criação de pasta");

  try {
    const placeholderRef = ref(storage, `construcoes/${codigo}/.placeholder`);
    const placeholderContent = new Blob([""], { type: "text/plain" });
    await uploadBytes(placeholderRef, placeholderContent);
    console.log(`Pasta '${codigo}' criada com sucesso.`);
  } catch (error) {
    console.error("Erro ao criar nova pasta:", error);
    throw error;
  }
}

/**
 * Lista imagens dentro de uma pasta específica
 */
export async function listImagesInFolder(folderName) {
  const folderRef = ref(storage, `construcoes/${folderName}`);
  const res = await listAll(folderRef);
  return res.items.map((item) => item.name);
}

/**
 * Obtém a URL de uma imagem no Firebase Storage
 */
export async function getImageURL(folderName, imageName) {
  const imageRef = ref(storage, `construcoes/${folderName}/${imageName}`);
  let url = await getDownloadURL(imageRef);

  // ✅ Corrige para o domínio certo
  url = url.replace("appspot.com", "firebasestorage.app");

  return url;
}
