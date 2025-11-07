import { useNavigate } from "react-router-dom";
import "../assets/css/upload_screen.css";
import { FaFileUpload } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mosaic } from "react-loading-indicators";
import {
  listConstructionFolders,
  listImagesInFolder,
  getImageURL,
} from "../backend/storage";

export default function Upload_Screen({ onUploadFile, onUploadImage, isLoading }) {
  const navigate = useNavigate();

  const [icon_file, setIconFile] = useState(
    <FaFileUpload size={48} color="white" style={{ position: "absolute" }} />
  );

  const [icon_img, setIconImg] = useState(
    <FaFileUpload size={48} color="white" style={{ position: "absolute" }} />
  );

  const [fileUploaded, setFileUploaded] = useState(false);
  const [imageSelected, setImageSelected] = useState(false);

  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [previewURL, setPreviewURL] = useState("");

  // 🪣 Carrega todas as pastas
  useEffect(() => {
    async function fetchFolders() {
      try {
        const lista = await listConstructionFolders();
        setFolders(lista);
      } catch (err) {
        console.error("Erro ao listar pastas:", err);
      }
    }
    fetchFolders();
  }, []);

  // 📂 Quando seleciona pasta, lista imagens
  useEffect(() => {
    async function fetchImages() {
      if (!selectedFolder) {
        setImages([]);
        setSelectedImage("");
        setPreviewURL("");
        return;
      }
      try {
        const lista = await listImagesInFolder(selectedFolder);
        setImages(lista);
      } catch (err) {
        console.error("Erro ao listar imagens:", err);
      }
    }
    fetchImages();
  }, [selectedFolder]);

  async function handleFile(e) {
    setIconFile(<Mosaic color="white" size="medium" />);
    const success = await onUploadFile(e);
    if (success) setFileUploaded(true);
    if (success && imageSelected) navigate("/viewer");
    setIconFile(<FaFileUpload size={48} color="white" style={{ position: "absolute" }} />);
  }

  async function handleSelectImage() {
    if (!selectedImage) return alert("Selecione uma imagem primeiro!");
    setIconImg(<Mosaic color="white" size="medium" />);
    try {
      const imageUrl = await getImageURL(selectedFolder, selectedImage);
      await onUploadImage(imageUrl);
      setImageSelected(true);
      if (fileUploaded) navigate("/viewer");
    } catch (err) {
      console.error("Erro ao carregar imagem:", err);
      alert("Erro ao selecionar imagem.");
    } finally {
      setIconImg(<FaFileUpload size={48} color="white" style={{ position: "absolute" }} />);
    }
  }

  // 👁️ Pré-visualizar a imagem selecionada
  useEffect(() => {
    async function previewSelectedImage() {
      if (!selectedFolder || !selectedImage) {
        setPreviewURL("");
        return;
      }
      try {
        const url = await getImageURL(selectedFolder, selectedImage);
        setPreviewURL(url);
      } catch (err) {
        console.error("Erro ao gerar pré-visualização:", err);
      }
    }
    previewSelectedImage();
  }, [selectedImage, selectedFolder]);

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="divisor"></div>

      <div className="collum">
        <h2>Insira o modelo da construção</h2>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="select-box">
          <label htmlFor="file_upload"></label>
          <input type="file" id="file_upload" onChange={handleFile} />
          <div className="icon-container">{icon_file}</div>
        </motion.div>
      </div>

      <div className="divisor"></div>

      <div className="collum">
        <h2>Selecione a foto da construção existente</h2>

        {/* Dropdown para pastas */}
        <select
          className="photo-upload-input"
          value={selectedFolder}
          onChange={(e) => {
            setSelectedFolder(e.target.value);
            setSelectedImage("");
            setPreviewURL("");
          }}
        >
          <option value="">Selecione uma construção</option>
          {folders.map((folder) => (
            <option key={folder} value={folder}>
              {folder}
            </option>
          ))}
        </select>

        {/* Dropdown para imagens */}
        {selectedFolder && (
          <select
            className="photo-upload-input"
            value={selectedImage}
            onChange={(e) => setSelectedImage(e.target.value)}
          >
            <option value="">Selecione uma imagem</option>
            {images.map((img) => (
              <option key={img} value={img}>
                {img}
              </option>
            ))}
          </select>
        )}

        {/* Pré-visualização da imagem */}
        {previewURL && (
          <div className="preview-container" style={{ marginTop: "10px", textAlign: "center" }}>
            <img
              src={previewURL}
              alt="Pré-visualização"
              style={{
                width: "220px",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              }}
            />
          </div>
        )}

        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="select-box"
          onClick={handleSelectImage}
          style={{ cursor: "pointer" }}
        >
          <div className="icon-container">{icon_img}</div>
        </motion.div>
      </div>

      <div className="divisor"></div>
    </motion.div>
  );
}
