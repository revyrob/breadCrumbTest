import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cameras from "./pages/Cameras";
import Assor from "./pages/Assor";
import CameraLenses from "./pages/CameraLenses";
import "./App.scss";
import NavField from "./components/NavField/NavField";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <NavField />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/home/cameras" element={<Cameras />} />
        <Route path="/category/cameras/accessories" element={<Assor />} />
        <Route
          path="/category/cameras/accessories/lenses"
          element={<CameraLenses />}
        />
        <Route
          path="/category/cameras/accessories/lenses/:lenseId"
          element={<CameraLenses />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
