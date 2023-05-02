import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

export function MeshPicture({position = [0, 0, 0], meshRef})   {

    const JoeBiden = 'joebiden'

  return (
    <>
      <mesh position={position} ref={meshRef}>
        <boxGeometry args={[5, 5, 5]} />
        <meshBasicMaterial color={"green"} />
      </mesh>
      </>
  );
}

export default function PictureFrame() {
  const meshRef = useRef();
  const v = new THREE.Vector3();
  const [position, setPosition] = useState([0, 0, 0]);

 

  useFrame((state, dt) => {
    v.copy({ x: state.pointer.x, y: state.pointer.y, z: 0 });
    v.unproject(state.camera);

    setPosition([v.x, v.y, v.z]);


  });

  return (
    <>
    <mesh position={position} meshRef={meshRef}> 
        <boxGeometry/>
        <meshBasicMaterial/>
    </mesh>
    <MeshPicture position={position}/>
    </>
  );
}
