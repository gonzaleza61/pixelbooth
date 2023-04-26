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
    <NavBar />
    <div className="h-screen fixed w-full bg-zinc-900 overflow-hidden">
      <Canvas
        shadows
        orthographic
        camera={{
          zoom: 100, 
          position: [0, 0, 10],
        }}
      >
        <App />
      </Canvas>
    </div>
    <HeroOverlay />
  </React.StrictMode>
);
