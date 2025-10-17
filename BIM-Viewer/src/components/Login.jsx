// src/pages/Login.jsx
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Undo2, LogIn } from "lucide-react";
import { loginWithEmail } from "../backend/auth";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

export async function handleLogin(email, senha, navigate) {
  try {
    await loginWithEmail(email, senha);
    toast.success("Login feito com sucesso!");
    navigate("/upload");
  } catch (error) {
    let errorMessage = "Erro desconhecido ao fazer login.";

    if (error.code) {
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage = "Email inválido.";
          break;
        case "auth/user-not-found":
        case "auth/invalid-credential":
        case "auth/wrong-password":
          errorMessage = "Usuário ou senha incorreto.";
          break;
        case "auth/too-many-requests":
          errorMessage = "Muitas tentativas. Tente novamente mais tarde.";
          break;
        case "auth/missing-password":
          errorMessage = "Por favor, digite a senha.";
          break;
        default:
          errorMessage = "Erro ao fazer login: " + error.message;
      }
    } else if (error.message) {
      errorMessage = error.message;
    }
    toast.error(errorMessage);
  }
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const onLoginClick = () => {
    handleLogin(email, senha, navigate);
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 overflow-hidden">
      <Toaster richColors position="top-right" />

      {/* Botão voltar */}
      <button
        className="absolute top-6 left-6 bg-white/10 hover:bg-white/20 backdrop-blur-lg p-2 rounded-full transition"
        onClick={() => navigate("/")}
        title="Voltar"
      >
        <Undo2 size={26} className="text-white" />
      </button>

      {/* Círculos decorativos */}
      <div className="absolute w-72 h-72 bg-blue-600/30 rounded-full blur-3xl -top-20 -left-20 animate-pulse" />
      <div className="absolute w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse" />

      {/* Card animado */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 p-10 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 w-full max-w-md text-center text-white"
      >
        <div className="flex flex-col items-center mb-8">
          <LogIn size={42} className="mb-3 text-blue-400" />
          <h1 className="text-3xl font-bold">Bem-vindo de volta</h1>
          <p className="text-gray-300 text-sm mt-2">
            Faça login para continuar
          </p>
        </div>

        <input
          className="w-full mb-4 p-3 rounded-lg bg-white/10 border border-white/30 focus:ring-2 focus:ring-blue-500 focus:outline-none text-white placeholder-gray-300"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-6 p-3 rounded-lg bg-white/10 border border-white/30 focus:ring-2 focus:ring-blue-500 focus:outline-none text-white placeholder-gray-300"
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition"
          onClick={onLoginClick}
        >
          Entrar
        </motion.button>

        <p className="mt-6 text-sm text-gray-300">
          Ainda não tem conta?{" "}
          <NavLink to="/cadastro" className="text-blue-400 hover:underline">
            Cadastre-se
          </NavLink>
        </p>
      </motion.div>
    </div>
  );
}
