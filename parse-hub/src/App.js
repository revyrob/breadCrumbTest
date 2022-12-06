import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cameras from "./pages/Cameras";
import Assor from "./pages/Assor";
import CameraLenses from "./pages/CameraLenses";
import "./App.scss";
import NavField from "./components/NavField/NavField";

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
        {/* <Route
          path="/category/cameras/accessories/lenses/dslrLenses"
          element={<DslrLenses />}
        /> */}
        {/* <Route
          path="/category/cameras/accessories/lenses/dslrLenses/:lenseId"
          element={<DslrLenses />}
        />
        <Route
          path="/category/cameras/accessories/lenses/dslrLenses"
          element={<DslrLenses />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
