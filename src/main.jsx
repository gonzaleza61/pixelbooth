import { Canvas } from "@react-three/fiber";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./ThreeJS/App";
import "./index.css";


import NavBar from "./Overlay/NavBar";
import HeroOverlay from "./Overlay/HeroSection";

import { softShadows } from "@react-three/drei";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar/>
    <div className="h-screen fixed w-full bg-zinc-900 overflow-hidden">
    <Canvas
    shadows
    camera={ {
      fov: 45,
      near: 0.1,
      far: 500,
      position: [9, 8, 15],
  } }>
      <App />
    </Canvas>
    </div>
    <HeroOverlay/>
  </React.StrictMode>
);
