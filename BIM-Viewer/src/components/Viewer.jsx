// src/components/Viewer.jsx
import { useEffect, useRef } from "react";

export default function Viewer({ urn, imageUrl, screenshotUrl, setScreenshotUrl }) {
  const viewerDiv = useRef(null);
  let viewer = null;

  // Inicializa viewer
  useEffect(() => {
    const options = {
      env: "AutodeskProduction",
      getAccessToken: async (onSuccess) => {
        try {
          const tokenResp = await fetch("http://localhost:3000/api/token");
          const tokenData = await tokenResp.json();
          if (tokenData.access_token) {
            onSuccess(tokenData.access_token, tokenData.expires_in);
            console.log("Token obtido para o viewer:", tokenData);
          } else {
            console.error("Token inválido recebido:", tokenData);
          }
        } catch (err) {
          console.error("Erro ao obter token do backend:", err);
        }
      },
    };

    Autodesk.Viewing.Initializer(options, () => {
      viewer = new Autodesk.Viewing.GuiViewer3D(viewerDiv.current);
      viewer.start();
      console.log("Viewer inicializado!");

      if (urn) {
        Autodesk.Viewing.Document.load(
          "urn:" + urn,
          (doc) => {
            const defaultModel = doc.getRoot().getDefaultGeometry();
            viewer.loadDocumentNode(doc, defaultModel).then(() => {
              console.log("Modelo carregado com sucesso!");
              setTimeout(() => {
                viewer.getScreenShotBuffer(800, 600, (blobURL) => {
                  setScreenshotUrl(blobURL);
                  console.log("Screenshot capturado!");
                });
              }, 1500);
            });
          },
          (err) => console.error("Erro ao carregar documento:", err)
        );
      }
    });

    return () => viewer && viewer.finish();
  }, [urn]);

  return (
    <div style={{ textAlign: "center" }}>
      <div
        className="viewer-container"
        style={{ height: "600px", border: "1px solid #ccc" }}
      >
        <div ref={viewerDiv} className="viewer" style={{ height: "100%", width: "100%" }} />
      </div>

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

      {screenshotUrl && (
        <div style={{ marginTop: "25px" }}>
          <h4>Screenshot automático do modelo:</h4>
          <img
            src={screenshotUrl}
            alt="Screenshot do modelo"
            style={{
              maxWidth: "500px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            }}
          />
        </div>
      )}
    </div>
  );
}
