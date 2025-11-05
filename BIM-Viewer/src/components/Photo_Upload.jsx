import React, { useEffect, useState } from "react";
import { MdAddAPhoto } from "react-icons/md";
import "../assets/css/photo_upload.css";
import {
  uploadConstructionPhoto,
  listConstructionFolders,
} from "../backend/storage";
import { getCurrentUser } from "../backend/auth";

export default function PhotoUpload() {
  const [codigo, setCodigo] = useState("");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [folders, setFolders] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  // Carrega as pastas existentes
  useEffect(() => {
    async function fetchFolders() {
      try {
        const lista = await listConstructionFolders();
        setFolders(lista);
      } catch (err) {
        console.error("Erro ao carregar pastas:", err);
      }
    }

    async function checkUser() {
      const user = getCurrentUser();
      if (user) {
        const adminStatus = user.email === "admin@empresa.com";
        setIsAdmin(adminStatus);
        if (!adminStatus) await fetchFolders();
      }
    }

    checkUser();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !codigo) {
      setError("Informe o código e selecione uma imagem!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const imageUrl = await uploadConstructionPhoto(file, codigo, isAdmin);
      setUrl(imageUrl);
      alert("Upload concluído com sucesso!");
    } catch (err) {
      console.error("Erro ao enviar imagem:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="photo-upload-root">
      <div className="photo-upload-box">
        <p>Selecione ou insira o código da construção</p>

        {isAdmin ? (
          <input
            className="photo-upload-input"
            type="text"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            placeholder="Código de Construção (nova pasta)"
          />
        ) : (
          <select
            className="photo-upload-input"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          >
            <option value="">Selecione uma construção</option>
            {folders.map((folder) => (
              <option key={folder} value={folder}>
                {folder}
              </option>
            ))}
          </select>
        )}

        <p>Insira foto da construção</p>
        <div className="photo-upload-container">
          <label htmlFor="photo_upload">
            <MdAddAPhoto size={48} color="white" style={{ cursor: "pointer" }} />
          </label>
          <input
            id="photo_upload"
            type="file"
            accept="image/*"
            capture="environment"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>

        <button onClick={handleUpload} disabled={loading}>
          {loading ? "Enviando..." : "Enviar Imagem"}
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {url && (
          <div className="photo-preview">
            <img src={url} alt="Pré-visualização" />
            <p>URL: {url}</p>
          </div>
        )}
      </div>
    </div>
  );
}
