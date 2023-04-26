import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

export function PictureModel() {
  const meshOne = useRef();
  const meshTwo = useRef();
  const meshThree = useRef();
  const meshArray = [meshOne, meshTwo, meshThree];
  const textureArray = useTexture("./justmarriedneon.jpg");
  const [prevMouseX, setPrevMouseX] = useState(0);
  const [prevMouseY, setPrevMouseY] = useState(0);
  const [meshIndex, setNextMeshIndex] = useState(0);
  const [currentMesh, setNextMesh] = useState(meshArray[meshIndex]);

  useFrame((state, deltaTime) => {
    meshOne.current.rotation.z += Math.sin(deltaTime * 0.5) * Math.PI * 0.05;
    meshTwo.current.rotation.z += Math.sin(deltaTime * 0.5) * Math.PI * 0.05;
    meshThree.current.rotation.z += Math.sin(deltaTime * 0.5) * Math.PI * 0.05;

    meshOne.current.position.y -= 4 * deltaTime;  
    meshTwo.current.position.y -= 4 * deltaTime;
    meshThree.current.position.y -= 4 * deltaTime;
  });

  useFrame(({ mouse, clock }) => {
    const deltaTime = clock.getDelta();

    if (
      Math.abs(mouse.x - prevMouseX) > 0.2 ||
      Math.abs(mouse.y - prevMouseY) > 0.2
    ) {
      setPrevMouseX(mouse.x);
      setPrevMouseY(mouse.y);

      currentMesh.current.position.set(mouse.x * 10, mouse.y * 5, 0);

      if(meshIndex === meshArray.length - 1){
        setNextMeshIndex(0)
      }else{
        setNextMeshIndex(meshIndex + 1)
      }
      
      setNextMesh(meshArray[meshIndex])


    }
  });
  return (
    <>

      <mesh ref={meshOne} position={[0, 10, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color={"blue"} />
      </mesh>

      <mesh ref={meshTwo} position={[0, 10, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color={"green"} />
      </mesh>

      <mesh ref={meshThree} position={[0, 10, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color={"purple"} />
      </mesh>
    </>
  );
}
