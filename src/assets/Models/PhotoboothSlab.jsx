/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function PhotoboothSlab(props) {
  const { nodes, materials } = useGLTF("./models/photobooth.glb");
  return (
    <group {...props} dispose={null} rotation-z={.2}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.002"]}
        position={[-2, 1.35, 1]}
        scale={.9}
        rotation={[0, Math.PI * .5, 0]}
      />
    </group>
  );
}

// useGLTF.preload("/photobooth.glb");