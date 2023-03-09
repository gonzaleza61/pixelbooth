/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function KanyeGlasses(props) {
  const { nodes, materials } = useGLTF("./models/PartyGlasses.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.glasses22001_1.geometry}
          material={materials.Base}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.glasses22001_2.geometry}
          material={materials.black}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/PartyGlasses.glb");