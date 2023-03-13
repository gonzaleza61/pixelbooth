import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function TheaterSpotlight(props) {
  const { nodes, materials } = useGLTF("./models/TheaterSpotlight.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cubo.geometry}
        material={materials.Material}
        position={[-2.02, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cubo001.geometry}
        material={materials.Material}
        position={[0, 0, 2.02]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cilindro001.geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, 0, 0.26]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cilindro002.geometry}
        material={materials.Material}
        position={[0, 0.95, -1]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        scale={10.18}
      />
      <mesh
        geometry={nodes.Cilindro003.geometry}
        material={materials.Material}
        position={[1, 0.95, 0]}
        rotation={[0, 0, Math.PI / 2]}
        scale={10.18}
      />
      <mesh
        geometry={nodes.Cubo002.geometry}
        material={materials.Material}
        position={[0, -1.6, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={110.95}
      />
      <mesh
        geometry={nodes.Cilindro.geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cubo003.geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("./models/TheaterSpotlight.glb");
