/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mustache(props) {
  const { nodes, materials } = useGLTF("./models/Mustache.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mustache_01_Cube026.geometry}
        material={materials["795548"]}
      />
    </group>
  );
}

useGLTF.preload("./models/Mustache.glb");
