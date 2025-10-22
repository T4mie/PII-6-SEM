import { Link, Route } from 'react-router-dom'
import '../assets/css/upload_screen.css'
import { FaFileUpload} from "react-icons/fa";
import { useEffect, useRef, useState} from "react";
import { handleFileUpload, handleImageUpload } from "../uploadHandle.jsx";
import { motion } from "framer-motion";

export default function Upload_Screen() {
    const [icon_file, setIconFile] = useState(
        <FaFileUpload size={48} color="white" style={{ position: "absolute" }} />
    );

    const [icon_img, setIconImg] = useState(
        <FaFileUpload size={48} color="white" style={{ position: "absolute" }} />
    );

    // const [imageUrl, setImageUrl] = useState(null);

    // useEffect(() => {
    //     async function init() {
    //     // Busca o URN do backend
    //     const resp = await fetch("http://localhost:3000/urn");
    //     const data = await resp.json();
    //     const myUrn = data.urn;

    //     // Inicializa o viewer
    //     const options = {
    //         env: "AutodeskProduction",
    //         getAccessToken: async (onSuccess) => {
    //         // Busca token do backend também
    //         const tokenResp = await fetch("http://localhost:3000/api/token");
    //         const tokenData = await tokenResp.json();
    //         onSuccess(tokenData.access_token, tokenData.expires_in);
    //         },
    //     };

    //     Autodesk.Viewing.Initializer(options, () => {
    //         viewer = new Autodesk.Viewing.GuiViewer3D(viewerDiv.current);
    //         viewer.start();

    //         Autodesk.Viewing.Document.load(
    //         "urn:" + myUrn,
    //         (doc) => {
    //             const defaultModel = doc.getRoot().getDefaultGeometry();
    //             viewer.loadDocumentNode(doc, defaultModel);
    //         },
    //         (err) => console.error("Erro ao carregar documento:", err)
    //         );
    //     });
    //     }

    //     init();

    //     return () => {
    //     if (viewer) {
    //         viewer.finish();
    //         viewer = null;
    //     }
    //     };
    // }, []);

    // async function handleImageUpload(e) {
    //     const file = e.target.files[0];
    //     if (!file) return;

    //     const formData = new FormData();
    //     formData.append("file", file);

    //     const resp = await fetch("http://localhost:3000/upload/image", {
    //     method: "POST",
    //     body: formData,
    //     });

    //     const data = await resp.json();
    //     if (data.imageUrl) {
    //     setImageUrl(data.imageUrl);
    //     console.log("Imagem enviada e recebida:", data.imageUrl);
    //     } else {
    //     console.error("Falha no upload da imagem", data);
    //     }
    // }

    return(
        <motion.div className="container"   
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        >
            <div className="divisor"></div>

            <div className="collum">
                <h2>Insira o modelo da construção</h2>
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <label htmlFor="file_upload"></label>
                    <input type="file" id="file_upload" onChange={(e) => handleFileUpload(e, setIconFile)}/>
                    {icon_file}
                </motion.div>
            </div>

            <div className="divisor"></div>

            <div className="collum">
                <h2>Insira a foto da construção</h2>
                <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                
                >
                    <label htmlFor="img_upload"></label>
                    <input type="file" id="img_upload" onChange={(e) => handleImageUpload(e, setIconImg)}/>
                    {icon_img}
                </motion.div>
            </div>

            <div className="divisor"></div>
        </motion.div>
    )
}