import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

export function PictureModel() {
  /**
   * Test Ref
   */
  const testRef = useRef();
  const [currentRotation, setCurrentRotation] = useState(0);

  const targetRotation = Math.PI * 0.1;

  /**
   * Refs
   */
  const meshOne = useRef();
  const meshTwo = useRef();
  const meshThree = useRef();
  const meshFour = useRef();
  const meshFive = useRef();
  const meshSix = useRef();
  const meshArray = [meshOne, meshTwo, meshThree, meshFour, meshFive, meshSix];

  /**
   * State
   */
  const [prevMouseX, setPrevMouseX] = useState(0);
  const [prevMouseY, setPrevMouseY] = useState(0);
  const [meshIndex, setNextMeshIndex] = useState(0);
  const [currentMesh, setNextMesh] = useState(meshArray[meshIndex]);
  const [currentYDrop, setNextYDrop] = useState([0, 0, 0, 0, 0, 0]);

  const v = new THREE.Vector3();

  const textureArray = useTexture("./justmarriedneon.jpg");
  textureArray.wrapS = THREE.ClampToEdgeWrapping;
  textureArray.wrapT = THREE.ClampToEdgeWrapping;
  textureArray.minFilter = THREE.NearestFilter;
  textureArray.magFilter = THREE.NearestFilter;

  // testRef.current.rotation.z -= lerp(0, Math.PI * .1, .001)

  useFrame((state) => {
    v.copy({ x: state.pointer.x, y: state.pointer.y, z: 0 });
    v.unproject(state.camera);

  

    if (
      Math.abs(state.pointer.x - prevMouseX) > 0.5 ||
      Math.abs(state.pointer.y - prevMouseY) > 0.5
    ) {
      console.log(meshIndex);
      console.log(currentYDrop);
      currentYDrop[meshIndex] = 0;
      setNextYDrop(currentYDrop);
      currentMesh.current.position.copy({ x: v.x, y: v.y, z: v.z });

      if (state.pointer.x - prevMouseX > 0) {
        currentMesh.current.rotation.z = Math.PI * -0.09;
      } else {
        currentMesh.current.rotation.z = Math.PI * 0.09;
      }

      setTimeout(() => {
        currentYDrop[meshIndex] = 0.1;
      }, 5000);
      setNextYDrop(currentYDrop);
      setNextMesh(meshArray[meshIndex]);

      // currentMesh.current.position.lerp({ x: v.x, y: v.y, z: v.z }, .1)
      // currentMesh.current.rotation.z += Math.PI * (v.x * .1)

      if (meshIndex === meshArray.length - 1) {
        setNextMeshIndex(0);
      } else {
        setNextMeshIndex(meshIndex + 1);
      }

      setPrevMouseX(state.pointer.x);
      setPrevMouseY(state.pointer.y);
    }
  });

  useFrame((state) => {
    meshOne.current.position.y -= currentYDrop[0];
    meshTwo.current.position.y -= currentYDrop[1];
    meshThree.current.position.y -= currentYDrop[2];
    meshFour.current.position.y -= currentYDrop[3];
    meshFive.current.position.y -= currentYDrop[4];
    meshSix.current.position.y -= currentYDrop[5];
  });

  useFrame(() => {
    // Lerp the rotation
    setCurrentRotation((currentRotation) => {
      const nextRotation = THREE.MathUtils.lerp(
        currentRotation,
        targetRotation,
        0.05 // Set the lerp amount to 0.05
      );
      testRef.current.rotation.z = nextRotation;
      return nextRotation;
    });
  });

  return (
    <>
      <mesh ref={testRef}>
        <planeGeometry args={[4, 4, 4]} />
        <meshBasicMaterial color={"red"} />
      </mesh>

      <mesh ref={meshOne} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"red"} />
      </mesh>

      <mesh ref={meshTwo} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"blue"} />
      </mesh>

      <mesh ref={meshThree} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"green"} />
      </mesh>

      <mesh ref={meshFour} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"white"} />
      </mesh>

      <mesh ref={meshFive} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"pink"} />
      </mesh>

      <mesh ref={meshSix} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"yellow"} />
      </mesh>
    </>
  );
}
