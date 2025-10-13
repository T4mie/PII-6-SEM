// src/components/Viewer.jsx
import { useEffect, useRef, useState } from "react";

export default function Viewer() {
  const viewerDiv = useRef(null);
  const [screenshotUrl, setScreenshotUrl] = useState(null);
  let viewer;

  useEffect(() => {
    async function init() {
      const resp = await fetch("http://localhost:3000/urn");
      const data = await resp.json();
      const myUrn = data.urn;

      const options = {
        env: "AutodeskProduction",
        getAccessToken: async (onSuccess) => {
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

  async function takeScreenshot() {
    if (!viewer) return;
    
    // Captura imagem como base64
    viewer.getScreenShot(1600, 900, async (blobURL) => {
      const blob = await fetch(blobURL).then((res) => res.blob());
      const formData = new FormData();
      formData.append("screenshot", blob, "screenshot.png");

      // Envia para o backend
      const uploadResp = await fetch("http://localhost:3000/upload-screenshot", {
        method: "POST",
        body: formData,
      });

      const data = await uploadResp.json();
      setScreenshotUrl(data.url); // URL pública do bucket
    });
  }

  return (
    <div>
      <div className="overlay">
          <img src={screenshotUrl} alt="Screenshot" style={{ maxWidth: "90%", borderRadius: "8px" }} />
        </div>
      <div className="viewer-container">
        <div ref={viewerDiv} className="viewer" />
        
        {screenshotUrl && (
          <div className="screenshot-preview">
            <h3>Screenshot salva no bucket:</h3>
            <img src={screenshotUrl} alt="Screenshot" style={{ maxWidth: "100%" }} />
          </div>
        )}
      </div>
    </div>
  );
}
