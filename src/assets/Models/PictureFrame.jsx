import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";



export default function PictureFrame() {

  const meshOneRef = useRef() 
  const gravity = 0.3
  const acceleration = 0.05


  let time = 0;
  let velocity = 0;


  const v = new THREE.Vector3()


  useFrame(({pointer, camera}, delta) => {
    v.copy({ x: pointer.x, y: pointer.y, z: 0 });
    v.unproject(camera);

    meshOneRef.current.position.copy({ x: v.x, y: v.y, z: v.z });
    
    time += delta; 
    velocity += gravity * acceleration;
    
    let easingFunction = (time * time) * velocity;

    console.log(easingFunction)

    meshOneRef.current.position.y -= easingFunction;

    // setTimeout(() => {
    //   time = 0; 
    //   meshOneRef.current.position.y = 0;
    // }, 5000)
  })



  return (
    <>
      <mesh ref={meshOneRef} position={[0, 0, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </>
  );
}
