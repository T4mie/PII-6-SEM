import React, { useEffect, useState } from "react";
import { MdAddAPhoto, MdCreateNewFolder } from "react-icons/md";
import "../assets/css/photo_upload.css";
import {
  uploadConstructionPhoto,
  listConstructionFolders,
  createEmptyFolder,
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
  const [creatingNew, setCreatingNew] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

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
        const adminStatus = user.email === "admin@email.com";
        setIsAdmin(adminStatus);
        await fetchFolders();
      }
    }

    checkUser();
  }, []);

  const handleFileChange = (e) => setFile(e.target.files[0]);

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

  const handleCreateFolder = async () => {
    if (!newFolderName.trim()) {
      alert("Informe um nome para a nova pasta!");
      return;
    }

    try {
      await createEmptyFolder(newFolderName);
      alert("Nova pasta criada com sucesso!");
      setCreatingNew(false);
      setNewFolderName("");
      const lista = await listConstructionFolders();
      setFolders(lista);
      setCodigo(newFolderName);
    } catch (err) {
      console.error("Erro ao criar pasta:", err);
      alert("Erro ao criar nova pasta.");
    }
  };

  return (
    <div className="photo-upload-root">
      <div className="photo-upload-box">
        <p>Selecione ou crie o código da construção</p>

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
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

          {isAdmin && (
            <button
              title="Criar nova construção"
              onClick={() => setCreatingNew(!creatingNew)}
              style={{
                backgroundColor: "#1e88e5",
                border: "none",
                borderRadius: "8px",
                padding: "8px 10px",
                cursor: "pointer",
              }}
            >
              <MdCreateNewFolder size={22} color="white" />
            </button>
          )}
        </div>

        {creatingNew && (
          <div style={{ marginTop: "10px" }}>
            <input
              type="text"
              placeholder="Nome da nova construção"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              className="photo-upload-input"
            />
            <button onClick={handleCreateFolder}>Criar pasta</button>
          </div>
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
