// src/uploadHandle.jsx
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// --- Upload do modelo (.stl) ---
export async function handleFileUpload(e, setIconFile, onUploadFile) {
  const file = e.target.files[0];
  if (!file) return false;

  const extension = file.name.split(".").pop().toLowerCase();

  if (extension !== "stl") {
    setIconFile(
      <FaTimesCircle
        size={48}
        color="red"
        style={{ position: "absolute" }}
      />
    );
    return false;
  } else {
    setIconFile(
      <FaCheckCircle
        size={48}
        color="white"
        style={{ position: "absolute" }}
      />
    );
    if (onUploadFile) {
      await onUploadFile(file);
      return true;
    }
    return false;
  }
}

// --- Upload da imagem ---
export async function handleImageUpload(e, setIconImg, onUploadImage) {
  const file = e.target.files[0];
  if (!file) return false;

  const extension = file.name.split(".").pop().toLowerCase();

  if (extension !== "png" && extension !== "jpeg" && extension !== "jpg") {
    setIconImg(
      <FaTimesCircle
        size={48}
        color="red"
        style={{ position: "absolute" }}
      />
    );
    return false;
  } else {
    setIconImg(
      <FaCheckCircle
        size={48}
        color="white"
        style={{ position: "absolute" }}
      />
    );
    if (onUploadImage) {
      await onUploadImage(file);
      return true;
    }
    return false;
  }
}
