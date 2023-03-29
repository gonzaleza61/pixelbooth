import { Canvas } from "@react-three/fiber";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./ThreeJS/App";
import HeroSection from "./Overlay/Hero";
import "./index.css";


import NavBar from "./Overlay/NavBar";
import AboutUs from "./Overlay/About";
import Gallery from "./Overlay/Gallery";
import { softShadows } from "@react-three/drei";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar/>
    <div className="h-screen fixed w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 overflow-hidden">
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
  </React.StrictMode>
);
