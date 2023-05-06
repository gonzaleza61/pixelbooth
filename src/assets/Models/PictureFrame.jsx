import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

export function MeshPicture({ position, meshRef }) {
  const JoeBiden = "joebiden";

  return (
    <>
      <mesh position={position} ref={meshRef}>
        <boxGeometry args={[5, 5, 5]} />
        <meshBasicMaterial color={"red"} />
      </mesh>
    </>
  );
}

export default function PictureFrame() {
  const meshRef = useRef();
  const v = new THREE.Vector3();
  const [position, setPosition] = useState([0, 0, 0]);

  const meshDummyRef = useRef();

  useFrame((state) => {
    v.copy({ x: state.pointer.x, y: state.pointer.y, z: 0 });
    v.unproject(state.camera);

    setPosition([v.x, v.y, v.z]);
  });

  useFrame(({ clock }) => {
    const delta = clock.getDelta();

    console.log(delta);

    meshDummyRef.current.rotation.y -= Math.PI * (delta * 100);
  });

  return (
    <>
      <mesh meshRef={meshDummyRef} position={[0, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={'red'} />
      </mesh>
      {/* <MeshPicture position={position} /> */}
    </>
  );
}
