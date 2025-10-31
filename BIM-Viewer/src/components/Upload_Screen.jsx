// src/components/Upload_Screen.jsx

import { useNavigate } from 'react-router-dom';
import '../assets/css/upload_screen.css';
import { FaFileUpload } from "react-icons/fa";
import { useState } from "react";
import { handleFileUpload, handleImageUpload } from "../uploadHandle.jsx";
import { motion } from "framer-motion";
import { Mosaic } from "react-loading-indicators";

export default function Upload_Screen({ onUploadFile, onUploadImage, isLoading }) {
  const navigate = useNavigate();

  const [icon_file, setIconFile] = useState(
    <FaFileUpload size={48} color="white" style={{ position: "absolute" }} />
  );

  const [icon_img, setIconImg] = useState(
    <FaFileUpload size={48} color="white" style={{ position: "absolute" }} />
  );

  const [fileUploaded, setFileUploaded] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);

  async function handleFile(e) {
    setIconFile(<Mosaic color="white" size="medium" text="" textColor="" style={{alignSelf:"center"}}/>);
    const success = await handleFileUpload(e, setIconFile, onUploadFile);
    if (success) setFileUploaded(true);
    if (success && imageUploaded) navigate("/viewer");
  }

  async function handleImage(e) {
    setIconImg(<Mosaic color="white" size="medium" text="" textColor="" style={{alignSelf:"center"}}/>);
    const success = await handleImageUpload(e, setIconImg, onUploadImage);
    if (success) setImageUploaded(true);
    if (success && fileUploaded) navigate("/viewer");
  }

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
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className='select-box'>
          <label htmlFor="file_upload"></label>
          <input
            type="file"
            id="file_upload"
            onChange={handleFile}
          />
          <div className="icon-container">
            {icon_file}
          </div>
        </motion.div>
      </div>

      <div className="divisor"></div>

      <div className="collum">
        <h2>Insira a foto da construção</h2>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className='select-box'>
          <label htmlFor="img_upload"></label>
          <input
            type="file"
            id="img_upload"
            onChange={handleImage}
          />
          <div className="icon-container">
            {icon_img}
          </div>
        </motion.div>
      </div>

      <div className="divisor"></div>
    </motion.div>
  );
}
