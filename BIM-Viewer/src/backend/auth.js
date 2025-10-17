import { signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import { auth } from "./firebase.js"



// Função de login com email
export async function loginWithEmail(email, senha) {
  const userCredential = await signInWithEmailAndPassword(auth, email, senha);
  return userCredential;
}

// Função para pegar o usuário autenticado
export function getCurrentUser() {
  return auth.currentUser;
}

// Função para logout
export async function logout() {
  await signOut(auth);
}

// Função para escutar mudanças de autenticação
export function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}