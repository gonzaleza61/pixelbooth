import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

export function PictureModel() {
  const testRef = useRef();

  const meshOne = useRef();
  const meshTwo = useRef();
  const meshThree = useRef();
  const meshFour = useRef();
  const meshFive = useRef();
  const meshSix = useRef();
  const meshArray = [meshOne, meshTwo, meshThree, meshFour, meshFive, meshSix];
  const [prevMouseX, setPrevMouseX] = useState(0);
  const [prevMouseY, setPrevMouseY] = useState(0);
  const [meshIndex, setNextMeshIndex] = useState(0);
  const [currentMesh, setNextMesh] = useState(meshArray[meshIndex]);
  const [currentRotationY, setNextRotationY] = useState(2);
  const [currentRotationZ, setNextRotationZ] = useState(0.5);

  const v = new THREE.Vector3();

  const textureArray = useTexture("./justmarriedneon.jpg");
  textureArray.wrapS = THREE.ClampToEdgeWrapping;
  textureArray.wrapT = THREE.ClampToEdgeWrapping;
  textureArray.minFilter = THREE.NearestFilter;
  textureArray.magFilter = THREE.NearestFilter;



  useFrame((state) => {
    v.copy({ x: state.pointer.x, y: state.pointer.y, z: 0 });
    v.unproject(state.camera);

    currentMesh.current.position.lerp({ x: v.x, y: v.y, z: v.z }, 0.1);

    if (
      Math.abs(state.pointer.x - prevMouseX) > 0.1 ||
      Math.abs(state.pointer.y - prevMouseY) > 0.1
    ) {
      currentMesh.current.position.copy({ x: v.x, y: v.y, z: v.z });

      if(state.pointer.x - prevMouseX > 0){
        currentMesh.current.rotation.z = Math.PI * -.09
      }else
      {
        currentMesh.current.rotation.z = Math.PI * .09
      }

      setNextMesh(meshArray[meshIndex]);

      // currentMesh.current.position.lerp({ x: v.x, y: v.y, z: v.z }, .1)
      // currentMesh.current.rotation.z += Math.PI * (v.x * .1)

      if (meshIndex === meshArray.length - 1) {
        setNextMeshIndex(0);
      } else {
        setNextMeshIndex(meshIndex + 1);
      }

      setPrevMouseX(state.pointer.x);
      setPrevMouseY(state.pointer.y)
    }
  });

  useFrame((state) => {
    meshOne.current.position.y -= .1
    meshTwo.current.position.y  -= .1
    meshThree.current.position.y  -= .1
    meshFour.current.position.y  -= .1
    meshFive.current.position.y  -= .1
    meshSix.current.position.y  -= .1
  });

  // useFrame((state, deltaTime) => {
  //   v.copy({ x: state.pointer.x, y: state.pointer.y, z:0})
  //   v.unproject(state.camera)

  //   testRef.current.rotation.z -= v.x * deltaTime
  // })

  // useFrame(({ mouse, clock }, deltaTime) => {
  //   // meshOne.current.rotation.z += Math.sin(deltaTime * currentRotationZ) * Math.PI * 0.005;
  //   meshTwo.current.rotation.z += Math.sin(deltaTime * currentRotationZ) * Math.PI * 0.005;
  //   meshThree.current.rotation.z += Math.sin(deltaTime * currentRotationZ) * Math.PI * 0.005;
  //   meshFour.current.rotation.z += Math.sin(deltaTime * currentRotationZ) * Math.PI * 0.005;
  //   meshFive.current.rotation.z += Math.sin(deltaTime * currentRotationZ) * Math.PI * 0.005;
  //   meshSix.current.rotation.z += Math.sin(deltaTime * currentRotationZ) * Math.PI * 0.005;

  //   // meshOne.current.position.y -= currentRotationY * deltaTime;
  //   meshTwo.current.position.y -= currentRotationY * deltaTime;
  //   meshThree.current.position.y -= currentRotationY * deltaTime;
  //   meshFour.current.position.y -= currentRotationY * deltaTime;
  //   meshFive.current.position.y -= currentRotationY * deltaTime;
  //   meshSix.current.position.y -= currentRotationY * deltaTime;

  //   if (
  //     Math.abs(mouse.x - prevMouseX) > 0.1 ||
  //     Math.abs(mouse.y - prevMouseY) > 0.1
  //   ) {

  //     if(mouse.y > prevMouseY){
  //       setNextRotationY(-4)
  //     }else{
  //       setNextRotationY(4)
  //     }

  //     if(mouse.x > prevMouseX){
  //       setNextRotationZ(-4)
  //     }else{
  //       setNextRotationZ(4)
  //     }

  //     currentMesh.current.position.set(mouse.x * 10, mouse.y * 5, 0);

  //     if (meshIndex === meshArray.length - 1) {
  //       setNextMeshIndex(0);
  //     } else {
  //       setNextMeshIndex(meshIndex + 1);
  //     }

  //     setNextMesh(meshArray[meshIndex]);
  //     setPrevMouseX(mouse.x);
  //     setPrevMouseY(mouse.y);
  //   }
  // });
  return (
    <>
      
    {/* <mesh ref={testRef}>
      <planeGeometry args={[4, 4, 4]}/>
      <meshBasicMaterial color={'red'}/>
    </mesh> */}

      <mesh ref={meshOne} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial map={textureArray} />
      </mesh>

      <mesh ref={meshTwo} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"green"} />
      </mesh>

      <mesh ref={meshThree} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"purple"} />
      </mesh>

      <mesh ref={meshFour} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"red"} />
      </mesh>

      <mesh ref={meshFive} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"yellow"} />
      </mesh>

      <mesh ref={meshSix} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
    </>
  );
}
