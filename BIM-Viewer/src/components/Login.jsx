// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithEmail } from "../backend/auth";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import "../assets/css/login.css";

export async function handleLogin(email, senha, navigate) {
  try {
    await loginWithEmail(email, senha);
    toast.success("Login feito com sucesso!");
    
    if (/android|iphone|ipad|iPod/i.test(navigator.userAgent)) {
      navigate("/photo-upload");
    } else {
      navigate("/upload");
    }
  } catch (error) {
    let msg = "Erro desconhecido ao fazer login.";
    switch (error.code) {
      case "auth/invalid-email":
        msg = "Email inválido."; break;
      case "auth/user-not-found":
      case "auth/invalid-credential":
      case "auth/wrong-password":
        msg = "Usuário ou senha incorreto."; break;
      case "auth/too-many-requests":
        msg = "Muitas tentativas. Tente novamente mais tarde."; break;
      case "auth/missing-password":
        msg = "Por favor, digite a senha."; break;
      default:
        if (error.message) msg = error.message;
    }
    toast.error(msg);
  }
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const onLoginClick = () => handleLogin(email, senha, navigate);

  return (
    <div className="login-bg">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="login-card"
      >
        <div className="login-header">
          <h1 className="login-title">Login</h1>
          <p className="login-subtitle">Faça login para continuar</p>
        </div>

        <input
          className="login-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="login-input"
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="login-btn"
          onClick={onLoginClick}
        >
          Entrar
        </motion.button>
      </motion.div>
      <Toaster />
    </div>
  );
}
