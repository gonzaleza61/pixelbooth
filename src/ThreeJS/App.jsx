import {
  useGLTF,
  Float,
  useTexture,
  useHelper,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useRef } from "react";
import { PictureModel } from "../assets/Models/PictureModel";
import PictureFrame from "../assets/Models/PictureFrame";

function App() {
  /**
   * Light Helpers
   */
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 2);

  /**
   * Textures
   */
  // const texture = useTexture("./photostrip2.png");

  /**
   *  Ref
   */
  // const photoStripRef = useRef();

  /**
   * Animation
   */
  // useFrame(() => {
  //   photoStripRef.current.position.y -= 0.01;
  // });

  return (
    <>
      <Perf position="bottom-right" />
      <ambientLight />
      <directionalLight
        ref={directionalLightRef}
        intensity={1.5}
        castShadow
        position={[5, 2, 3]}
        color="white"
      />

      {/* <PictureFrame/> */}
      <PictureModel />

      {/* <mesh ref={photoStripRef} position={[0, 0, 0]}>
        <planeGeometry args={[2, 2, 2]} />
        <meshStandardMaterial attach={"material"} map={texture} />
      </mesh> */}
    </>
  );
}

export default App;
