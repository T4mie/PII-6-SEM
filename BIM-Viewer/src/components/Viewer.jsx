// src/components/Viewer.jsx
import { useEffect, useRef, useState } from "react";

export default function Viewer() {
  const viewerDiv = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  let viewer;

  useEffect(() => {
    async function init() {
      // Busca o URN do backend
      const resp = await fetch("http://localhost:3000/urn");
      const data = await resp.json();
      const myUrn = data.urn;

      // Inicializa o viewer
      const options = {
        env: "AutodeskProduction",
        getAccessToken: async (onSuccess) => {
          // Busca token do backend também
          const tokenResp = await fetch("http://localhost:3000/api/token");
          const tokenData = await tokenResp.json();
          onSuccess(tokenData.access_token, tokenData.expires_in);
        },
      };

      Autodesk.Viewing.Initializer(options, () => {
        viewer = new Autodesk.Viewing.GuiViewer3D(viewerDiv.current);
        viewer.start();

        Autodesk.Viewing.Document.load(
          "urn:" + myUrn,
          (doc) => {
            const defaultModel = doc.getRoot().getDefaultGeometry();
            viewer.loadDocumentNode(doc, defaultModel);
          },
          (err) => console.error("Erro ao carregar documento:", err)
        );
      });
    }

    init();

    return () => {
      if (viewer) {
        viewer.finish();
        viewer = null;
      }
    };
  }, []);

  // Upload de imagem
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
      console.log("Imagem enviada e recebida:", data.imageUrl);
    } else {
      console.error("Falha no upload da imagem", data);
    }
  }

  return (
    <div>
      <div className="viewer-container">
        <div ref={viewerDiv} className="viewer" />
      </div>
      <div className="overlay">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ marginLeft: "10px" }}
        />
      </div>

      {/* Mostrar imagem enviada */}
      {imageUrl && (
        <div style={{ marginTop: "15px", textAlign: "center" }}>
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
