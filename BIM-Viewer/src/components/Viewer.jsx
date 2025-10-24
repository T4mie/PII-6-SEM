// src/components/Viewer.jsx
import { useEffect, useRef, useState } from "react";

export default function Viewer({ urn, imageUrl, screenshotUrl, setScreenshotUrl }) {
  const viewerDiv = useRef(null);
  const [similarity, setSimilarity] = useState(null);
  const [isComparing, setIsComparing] = useState(false);
  let viewer = null;

  // Inicializa o Autodesk Viewer
  useEffect(() => {
    const options = {
      env: "AutodeskProduction",
      getAccessToken: async (onSuccess) => {
        try {
          const tokenResp = await fetch("http://localhost:3000/api/token");
          const tokenData = await tokenResp.json();
          if (tokenData.access_token) {
            onSuccess(tokenData.access_token, tokenData.expires_in);
          } else {
            console.error("Token inválido:", tokenData);
          }
        } catch (err) {
          console.error("Erro ao obter token:", err);
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

              // Captura automática de screenshot após carregamento
              setTimeout(() => {
                viewer.getScreenShot(800, 600, async (blobURL) => {
                  setScreenshotUrl(blobURL);
                  console.log("Screenshot capturado!");

                  // Faz comparação entre a imagem enviada e o screenshot
                  if (imageUrl) {
                    setIsComparing(true);
                    try {
                      const formData = new FormData();
                      const img1 = await fetch(imageUrl).then((r) => r.blob());
                      const img2 = await fetch(blobURL).then((r) => r.blob());

                      formData.append("img1", img1, "imagem1.jpg");
                      formData.append("img2", img2, "imagem2.jpg");

                      const resp = await fetch("http://localhost:3000/api/compare", {
                        method: "POST",
                        body: formData,
                      });

                      const data = await resp.json();
                      setSimilarity(data.similarity);
                      console.log("Resultado da comparação:", data.similarity);
                    } catch (err) {
                      console.error("Erro ao comparar imagens:", err);
                    } finally {
                      setIsComparing(false);
                    }
                  }
                });
              }, 2000);
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
        style={{
          height: "600px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div ref={viewerDiv} className="viewer" style={{ height: "100%", width: "100%" }} />
      </div>

      {imageUrl && (
        <div style={{ marginTop: "25px" }}>
          <h4>Imagem enviada:</h4>
          <img
            src={imageUrl}
            alt="Imagem enviada"
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

      {isComparing && (
        <div style={{ marginTop: "30px" }}>
          <h4>Comparando imagens...</h4>
          <div
            className="loader"
            style={{
              border: "5px solid #f3f3f3",
              borderTop: "5px solid #4caf50",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              margin: "15px auto",
              animation: "spin 1s linear infinite",
            }}
          />
          <style>
            {`@keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }`}
          </style>
        </div>
      )}

      {similarity && (
        <div style={{ marginTop: "40px" }}>
          <h3>Similaridade entre as imagens</h3>
          <div
            style={{
              width: "400px",
              height: "30px",
              borderRadius: "10px",
              background: "#ddd",
              margin: "0 auto",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                width: `${similarity.replace("%", "")}%`,
                height: "100%",
                background: "linear-gradient(90deg, #4caf50, #8bc34a)",
                color: "white",
                fontWeight: "bold",
                lineHeight: "30px",
                transition: "width 1s ease-in-out",
              }}
            >
              {similarity}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
