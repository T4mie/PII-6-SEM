// src/App.jsx
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Upload_Screen from "./components/Upload_Screen";
import Viewer from "./components/Viewer";
import "./assets/css/viewer.css";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Upload_Screen />} />
          <Route path="/viewer" element={<Viewer />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
