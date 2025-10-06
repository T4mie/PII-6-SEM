// src/components/Viewer.jsx
import { useEffect, useRef } from "react";

export default function Viewer() {
  const viewerDiv = useRef(null);
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
          // Busca token do backend também (melhor prática seria expor um /token separado)
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

  // Botão Explode (React)
  function toggleExplode() {
    if (!viewer) return;
    if (viewer.getExplodeScale() > 0.0) {
      viewer.explode(0.0);
    } else {
      viewer.explode(0.5);
    }
  }

  return (
    <div className="viewer-container">
      <div ref={viewerDiv} className="viewer" />
      <div className="overlay">
        <button onClick={toggleExplode}>Explode</button>
      </div>
    </div>
  );
}
