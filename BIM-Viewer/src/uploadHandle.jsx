import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export async function handleFileUpload(e, setIconFile) {
  const file = e.target.files[0];
  const extension = file.name.split(".").pop().toLowerCase();
  if (extension != "stl") {
 
    setIconFile(
      <FaTimesCircle
        size={48}
        color="red"
        style={{ position: "absolute" }}
      />
    );
  } else {

    setIconFile(
      <FaCheckCircle
        size={48}
        color="white"
        style={{ position: "absolute" }}
      />
    );
  }
}

export async function handleImageUpload(e, setIconImg) {
  const file = e.target.files[0];
  const extension = file.name.split(".").pop().toLowerCase();
  if (extension != "png" && extension != "jpeg" && extension != "jpg") {

    setIconImg(
      <FaTimesCircle
        size={48}
        color="white"
        style={{ position: "absolute" }}
      />
    );
  } else {

    setIconImg(
      <FaCheckCircle
        size={48}
        color="white"
        style={{ position: "absolute" }}
      />
    );
  }
}
