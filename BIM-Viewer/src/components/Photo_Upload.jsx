import React from "react";
import { MdAddAPhoto } from "react-icons/md";
import "../assets/css/photo_upload.css";

export default function PhotoUpload() {
  return (
    <div className="photo-upload-root">
      <p>Insira foto da construção a ser utilizada</p>
      <div className="photo-upload-container">
        <label htmlFor="photo_upload"></label>
        <MdAddAPhoto size={48} color="white" style={{ position: "absolute" }} />
      </div>
      <input id='photo_upload' type="file" accept="image/*" capture="environment" style={{ display: "none" }} />
    </div>
  );
}
