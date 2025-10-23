// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload_Screen from "./components/Upload_Screen";
import Viewer from "./components/Viewer";
import Login from "./components/Login";
import "./assets/css/viewer.css";
import { useState } from "react";

function App() {
  const [urn, setUrn] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [screenshotUrl, setScreenshotUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Upload do arquivo
  async function uploadFile(file) {
    if (!file) return;
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const resp = await fetch("http://localhost:3000/upload/file", {
        method: "POST",
        body: formData,
      });
      const data = await resp.json();
      if (data.urn) {
        setUrn(data.urn);
        console.log("Upload concluído, URN:", data.urn);
      } else {
        console.error("Erro no upload:", data);
      }
    } catch (err) {
      console.error("Erro ao enviar arquivo:", err);
    } finally {
      setIsLoading(false);
    }
  }

  // Upload de imagem
  async function uploadImage(file) {
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
      console.error("Falha no upload:", data);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/upload"
          element={
            <Upload_Screen
              onUploadFile={uploadFile}
              onUploadImage={uploadImage}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/viewer"
          element={
            <Viewer
              urn={urn}
              imageUrl={imageUrl}
              screenshotUrl={screenshotUrl}
              setScreenshotUrl={setScreenshotUrl}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
