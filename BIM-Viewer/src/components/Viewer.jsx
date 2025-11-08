import { useEffect, useRef, useState } from "react";

export default function Viewer({ urn, imageUrl, screenshotUrl, setScreenshotUrl }) {
  const viewerDiv = useRef(null);
  const [similarity, setSimilarity] = useState(null);
  const [isComparing, setIsComparing] = useState(false);
  const [viewer, setViewer] = useState(null);

  // ✅ Corrigido — não altera mais o domínio (mantém firebasestorage.app)
  function fixFirebaseUrl(url) {
    if (!url) return url;
    return url; // não faz replace, pois o domínio correto é firebasestorage.app
  }

  // Inicializa o Autodesk Viewer
  useEffect(() => {
    const options = {
      env: "AutodeskProduction",
      getAccessToken(onSuccess, onError) {
        fetch("https://pii-6-sem.onrender.com/api/token")
          .then(async (response) => {
            const text = await response.text();
            try {
              const data = JSON.parse(text);
              if (data.access_token) {
                onSuccess(data.access_token, data.expires_in);
              } else {
                console.error("Token inválido:", data);
                onError && onError("Token inválido");
              }
            } catch (e) {
              console.error("Resposta inesperada do servidor:", text);
              onError && onError("Resposta inesperada do servidor");
            }
          });
      },
    };

    Autodesk.Viewing.Initializer(options, () => {
      const newViewer = new Autodesk.Viewing.GuiViewer3D(viewerDiv.current);
      newViewer.start();
      setViewer(newViewer);
      console.log("Viewer inicializado!");

      if (urn) {
        Autodesk.Viewing.Document.load(
          "urn:" + urn,
          (doc) => {
            const defaultModel = doc.getRoot().getDefaultGeometry();
            newViewer.loadDocumentNode(doc, defaultModel).then(() => {
              console.log("Modelo carregado com sucesso!");
            });
          },
          (err) => console.error("Erro ao carregar documento:", err)
        );
      }
    });

    return () => viewer && viewer.finish();
  }, [urn]);

  // Função de comparação de imagens
  async function handleCompare() {
    if (!viewer) {
      alert("Viewer ainda não foi inicializado!");
      return;
    }

    if (!imageUrl) {
      alert("Envie uma imagem antes de comparar!");
      return;
    }

    setIsComparing(true);
    setSimilarity(null);

    viewer.getScreenShot(800, 600, async (blobURL) => {
      try {
        setScreenshotUrl(blobURL);
        console.log("Screenshot capturado!");

        // ✅ Usa URL original do Firebase (sem replace)
        const fixedImageUrl = fixFirebaseUrl(imageUrl);

        const formData = new FormData();
        console.log("Baixando imagem via URL:", fixedImageUrl);

        const img1Response = await fetch(fixedImageUrl);
        if (!img1Response.ok) throw new Error(`Falha ao baixar imagem Firebase (${img1Response.status})`);
        const img1 = await img1Response.blob();

        const img2Response = await fetch(blobURL);
        if (!img2Response.ok) throw new Error(`Falha ao capturar screenshot (${img2Response.status})`);
        const img2 = await img2Response.blob();

        formData.append("img1", img1, "imagem1.jpg");
        formData.append("img2", img2, "imagem2.jpg");

        console.log("Enviando imagens para comparação...");

        const resp = await fetch("https://pii-6-sem.onrender.com/api/compare", {
          method: "POST",
          body: formData,
        });

        const data = await resp.json();
        if (data.similarity) {
          setSimilarity(data.similarity);
          console.log("Resultado da comparação:", data.similarity);
        } else {
          console.error("Falha ao obter similaridade:", data);
        }
      } catch (err) {
        console.error("Erro ao comparar imagens:", err);
        alert("Falha ao comparar imagens. Verifique se a imagem está acessível publicamente no Firebase.");
      } finally {
        setIsComparing(false);
      }
    });
  }

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

      {/* Mostra imagem enviada */}
      {imageUrl && (
        <div style={{ marginTop: "25px" }}>
          <h4>Imagem enviada:</h4>
          <img
            src={fixFirebaseUrl(imageUrl)}
            alt="Imagem enviada"
            style={{
              maxWidth: "400px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            }}
          />
        </div>
      )}

      {/* Mostra screenshot capturado */}
      {screenshotUrl && (
        <div style={{ marginTop: "25px" }}>
          <h4>Último screenshot:</h4>
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

      {/* Botão de comparação */}
      <div style={{ marginTop: "30px" }}>
        <button
          onClick={handleCompare}
          disabled={!imageUrl || isComparing}
          style={{
            padding: "12px 25px",
            background: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          {isComparing ? "Comparando..." : "Comparar Imagens"}
        </button>
      </div>

      {/* Barra de similaridade */}
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
