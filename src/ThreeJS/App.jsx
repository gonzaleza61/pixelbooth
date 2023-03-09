import {
  useGLTF,
  Float,
  Environment,
  Stars,
  useTexture,
  OrbitControls,
  Text3D,
  useHelper,
  BakeShadows,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Debug, Physics, RigidBody } from "@micmania1/react-three-rapier";
import * as THREE from "three";
import { useRef } from "react";

import { KanyeGlasses } from "../assets/Models/KanyeGlasses";
import { AviatorGlasses } from "../assets/Models/AviatorGlasses";
import { Mustache } from "../assets/Models/Mustache";
import { TopHat } from "../assets/Models/Tophat";

function App() {
  /**
   * 3D Models
   */
  const partyGlassesModel = useGLTF("./models/PartyGlasses.glb");
  const aviatorGlassesModel = useGLTF("./models/AviatorSunglasses.glb");
  const topHatModel = useGLTF("./models/TopHat.glb");
  const mustacheModel = useGLTF("./models/Mustache.glb");

  partyGlassesModel.scene.children.forEach((mesh, i) => {
    mesh.castShadow = true;
  });
  partyGlassesModel.castShadow = true;
  partyGlassesModel.scene.castShadow = true;

  /**
   * Textures
   */
  const texture = useTexture("./photostrip2.png");

  /**
   * Light Helpers
   */
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 2);

  return (
    <>
      <Perf position="bottom-left" />
      <OrbitControls makeDefault />
      <ambientLight/>
      {/* <Environment preset="city" /> */}
      <directionalLight
        ref={directionalLightRef}
        intensity={1.6}
        castShadow
        position={[10, 5, 0]}
      />

      <Physics>
        {/* <Debug /> */}

        {/* Floor */}
        <RigidBody type="fixed" colliders="trimesh" position={[-3, 1.8, 3.5]}>
          <Text3D
            font="./Bebas_Neue_Regular.json"
            bevelThickness={0.2}
            letterSpacing={0}
            size={0.9}
            lineHeight={0.6}
            bevelEnabled
            rotation-y={1.5}
            castShadow
          >
            {"Houston\nPixel\nPhotobooth"}
            <meshStandardMaterial color={"red"} />
          </Text3D>
        </RigidBody>

        <RigidBody type="fixed" position={[0, -1, 0]} restitution={1}>
          <mesh receiveShadow>
            <boxGeometry args={[20, 2, 20]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </RigidBody>

        <Float floatIntensity={4}>
          <KanyeGlasses position={[0, 1.3, 0]}/>
        </Float>
      </Physics>
    </>
  );
}

export default App;
