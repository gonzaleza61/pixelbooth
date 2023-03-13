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

import { WoodFloor } from '../assets/Models/WoodFloor'
import { KanyeGlasses } from "../assets/Models/KanyeGlasses";
import { TheaterSpotlight } from "../assets/Models/TheaterSpotlight";
import { CameraStand } from "../assets/Models/CameraStand";
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
      <ambientLight />
      <directionalLight
        ref={directionalLightRef}
        intensity={1.5}
        castShadow
        position={[10, 5, 0]}
      />

      <Physics>
        {/* <Debug /> */}

        {/* Floor */}
        <RigidBody type="fixed" colliders="trimesh" position={[-2, 1.8, 2]}>
          <Text3D
            font="./Bebas_Neue_Regular.json"
            bevelThickness={0.2}
            letterSpacing={0}
            size={0.9}
            lineHeight={0.6}
            bevelEnabled
            rotation-y={Math.PI * 0.5}
            castShadow
            receiveShadow
          >
            {"HOUSTON\nPixel\nPhotobooth"}
            <meshStandardMaterial color={"red"} />
          </Text3D>
        </RigidBody>

        <RigidBody type="fixed" position={[0, -0.5, 0]} restitution={1}>
          <mesh receiveShadow>
            <boxGeometry args={[8, 0.5, 8]} />
            <meshStandardMaterial color="tan" />
          </mesh>
        </RigidBody>

        <RigidBody position={[-4, 1.5, 0]} type="fixed">
          <mesh receiveShadow>
            <boxGeometry args={[.5, 5, 8]} />
            <meshStandardMaterial color="tan" />
          </mesh>
        </RigidBody>

        <RigidBody position={[-0.25, 1.5, -4.5]} type="fixed">
          <mesh receiveShadow>
            <boxGeometry args={[8.5, 5, .5]} />
            <meshStandardMaterial color="tan" />
          </mesh>
        </RigidBody>

        <WoodFloor />

        <TopHat
          position={[3, 0.29, -3]}
          scale={0.25}
          rotation-y={Math.PI * 1}
        />

        <KanyeGlasses
          position={[4, 2, -1]}
          rotation-y={Math.PI * 0.5}
          scale={0.5}
          castShadow
        />

        <Mustache
          position={[0, 2, 0]}
          rotation-y={Math.PI * 0.5}
          scale={0.02}
        />

        <CameraStand
          position={[3, 1.5, 0]}
          scale={0.5}
          rotation-y={Math.PI * 0.5}
        />
        <TheaterSpotlight
          position={[4, 4, -2.5]}
          scale={0.2}
          rotation-z={Math.PI * 0.75}
          rotation-y={Math.PI * 0.3}
        />
        <TheaterSpotlight
          position={[4, 4, 2.5]}
          scale={0.2}
          rotation-z={Math.PI * 0.75}
          rotation-y={Math.PI * 0.3 * -1}
        />
      </Physics>
    </>
  );
}

export default App;
