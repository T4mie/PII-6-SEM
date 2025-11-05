// import React, { useState } from "react";
import { MdAddAPhoto } from "react-icons/md";
import "../assets/css/photo_upload.css";
import { uploadConstructionPhoto } from "../backend/storage"; // ajuste o caminho conforme seu projeto

export default function PhotoUpload() {
  const [codigo, setCodigo] = useState("");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !codigo) {
      alert("Informe o código e selecione uma imagem!");
      return;
    }

    setLoading(true);
    try {
      const imageUrl = await uploadConstructionPhoto(file, codigo);
      setUrl(imageUrl);
      alert("Upload concluído com sucesso!");
    } catch {
      alert("Erro ao enviar imagem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="photo-upload-root">
      <div className="photo-upload-box">
        <p>Insira o código da construção</p>
        <input
          className="photo-upload-input"
          type="text"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          placeholder="Código de Construção"
        />

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
