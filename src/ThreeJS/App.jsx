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
  RoundedBox,
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
import { PhotoboothSlab } from "../assets/Models/PhotoboothSlab";


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
        position={[5, 2, 3]}
        color='white'
      />

      <Physics>
        {/* <Debug /> */}


        <RigidBody type="fixed" colliders="trimesh" position={[1.5, 3.5, -2.4]}>
          <Text3D
            font="./Bebas_Neue_Regular.json"
            bevelThickness={0.1}
            letterSpacing={0}
            size={0.4}
            lineHeight={0.6}
            bevelEnabled
            rotation-y={Math.PI * 2}
            castShadow
            receiveShadow
          >
            {"HOUSTON\nPixel\nPhotobooth"}
            <meshStandardMaterial color={"red"} />
          </Text3D>
        </RigidBody>

        {/* Floor */}
        <RigidBody type="fixed" position={[-0.129, -0.1, -0.16]} restitution={1}>
          <mesh receiveShadow>
            <boxGeometry args={[8, 0.2, 5.3]} />
            <meshStandardMaterial color="#3a3a3a" />
          </mesh>
        </RigidBody>

        {/* Wall Along Z-Axis */}
          <mesh position={[-4.0, 2.25, 0]} receiveShadow>
            <boxGeometry args={[.3, 4.5, 5]} />
            <meshStandardMaterial color="tan" />
          </mesh>

        {/* Wall Along X-Axis */}
          <mesh position={[-0.16, 2.25, -2.65]} receiveShadow>
            <boxGeometry args={[8.0, 4.5, .3]} />
            <meshStandardMaterial color="tan" />
          </mesh>

        {/* Table */}
          <mesh position={[1.2, 1, -2]}>
            <boxGeometry args={[2.5, .1, 1.2]}/>
            <meshStandardMaterial color='#bab198'/>
          </mesh>

          <mesh position={[0.1, .5, -1.5]}>
            <boxGeometry args={[.1, 1, .1]}/>
            <meshStandardMaterial color={"black"}/>
          </mesh>

          <mesh position={[0.1, .5, -2.3]}>
            <boxGeometry args={[.1, 1, .1]}/>
            <meshStandardMaterial color={"black"}/>
          </mesh>


          <mesh position={[2.3, .5, -1.5]}>
            <boxGeometry args={[.1, 1, .1]}/>
            <meshStandardMaterial color={"black"}/>
          </mesh>

          <mesh position={[2.3, .5, -2.3]}>
            <boxGeometry args={[.1, 1, .1]}/>
            <meshStandardMaterial color={"black"}/>
          </mesh>


          <PhotoboothSlab/>



       
       

        <WoodFloor />

        <TopHat
          position={[3, 0.29, -3]}
          scale={0.25}
          rotation-y={Math.PI * 1}
        />

        <KanyeGlasses
          position={[2, 1.379, -2]}
          rotation-y={Math.PI * 0.3}
          scale={0.2}
          castShadow
        />

        <Mustache
          position={[0, 2, 0]}
          rotation-y={Math.PI * 0.5}
          scale={0.02}
        />

       
        {/* <TheaterSpotlight
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
        /> */}
      </Physics>
    </>
  );
}

export default App;
