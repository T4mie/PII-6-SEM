// src/components/Viewer.jsx
import { useEffect, useRef, useState } from "react";

export default function Viewer() {
  const viewerDiv = useRef(null);
  const [viewer, setViewer] = useState(null);
  const [urn, setUrn] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Inicializa o viewer (sem carregar modelo ainda)
  useEffect(() => {
    const options = {
      env: "AutodeskProduction",
      getAccessToken: async (onSuccess) => {
        const tokenResp = await fetch("http://localhost:3000/start");
        const tokenData = await tokenResp.json();
        onSuccess(tokenData.access_token, tokenData.expires_in);
      },
    };

    Autodesk.Viewing.Initializer(options, () => {
      const newViewer = new Autodesk.Viewing.GuiViewer3D(viewerDiv.current);
      newViewer.start();
      setViewer(newViewer);
      console.log("Viewer inicializado!");
    });

    return () => {
      if (viewer) {
        viewer.finish();
        console.log("Viewer encerrado.");
      }
    };
  }, []);

  // Quando o URN for definido, carrega o modelo no viewer
  useEffect(() => {
    if (!viewer || !urn) return;

    Autodesk.Viewing.Document.load(
      "urn:" + urn,
      (doc) => {
        const defaultModel = doc.getRoot().getDefaultGeometry();
        viewer.loadDocumentNode(doc, defaultModel);
        console.log("Modelo carregado com sucesso!");
      },
      (err) => console.error("Erro ao carregar documento:", err)
    );
  }, [urn, viewer]);

  // Upload de imagem (já existia)
  async function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const resp = await fetch("http://localhost:3000/upload/image", {
      method: "POST",
      body: formData,
    });

    const data = await resp.json();
    if (data.imageUrl) {
      setImageUrl(data.imageUrl);
      console.log("Imagem enviada:", data.imageUrl);
    } else {
      console.error("Falha no upload da imagem:", data);
    }
  }

  // Upload do arquivo RVT (novo)
  async function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      console.log("Enviando arquivo RVT:", file.name);

      const resp = await fetch("http://localhost:3000/upload/file", {
        method: "POST",
        body: formData,
      });

      const data = await resp.json();

      if (data.urn) {
        console.log("Upload concluído, URN recebido:", data.urn);
        setUrn(data.urn);
      } else {
        console.error("Erro no upload:", data);
      }
    } catch (err) {
      console.error("Erro ao enviar arquivo:", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div className="viewer-container" style={{ height: "600px", border: "1px solid #ccc" }}>
        <div ref={viewerDiv} className="viewer" style={{ height: "100%", width: "100%" }} />
      </div>

      <div className="upload-controls" style={{ marginTop: "20px" }}>
        <label>
          <strong>Enviar arquivo RVT:</strong>
          <input
            type="file"
            accept=".rvt"
            onChange={handleFileUpload}
            disabled={isLoading}
            style={{ marginLeft: "10px" }}
          />
        </label>

        <label style={{ marginLeft: "30px" }}>
          <strong>Enviar imagem:</strong>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ marginLeft: "10px" }}
          />
        </label>

        {isLoading && <p style={{ marginTop: "10px" }}>Processando arquivo RVT...</p>}
      </div>

      {/* Mostrar imagem enviada */}
      {imageUrl && (
        <div style={{ marginTop: "25px" }}>
          <h4>Imagem enviada:</h4>
          <img
            src={imageUrl}
            alt="Preview"
            style={{
              maxWidth: "400px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            }}
          />
        </div>
      )}
    </div>
  );
}
