import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function PictureModel() {
  const meshRef = useRef();
  const [prevMouseX, setPrevMouseX] = useState(0);

  // useFrame((event) => {
  // });

  useFrame(({ mouse, viewport }) => {
    if (mouse.x !== prevMouseX) {
      setPrevMouseX(mouse.x);

      const newMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(3, 3, 2),
        new THREE.MeshBasicMaterial({ color: "red" })
      );
      newMesh.position.set((mouse.x * 10) , mouse.y * 5  , 0);
      meshRef.current.parent.add(newMesh);

      console.log(viewport.width)
      console.log(mouse.x)

      // Destroy the new mesh after 1 second
      setTimeout(() => {
        meshRef.current.parent.remove(newMesh);
      }, 1000);
    }
  });
  return (
    <>
      <mesh ref={meshRef} position={[0, 10, 0]}>
        <sphereGeometry args={[0.2, 0.2]} />
        <meshStandardMaterial color={"red"} />
      </mesh>


      {/* <mesh position={[-5, 5, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color={"red"} />
      </mesh>

      <mesh position={[5, -5, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color={"red"} />
      </mesh>

      <mesh position={[-2.5, -2.5, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color={"red"} />
      </mesh> */}
    </>
  );
}
