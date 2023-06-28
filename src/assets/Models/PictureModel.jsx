import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";



export function PictureModel() {
  /**
   * Test Ref
   */
  const testRef = useRef();
  const initialY = 4;
  const gravity = 0.6;
  const acceleration = 0.5;

  const easeOutQuad = (t) => t * t;

  let time = 0;
  let velocity = 0;

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
  const meshSeven = useRef();
  const meshEight = useRef();
  const meshNine = useRef();
  const meshTen = useRef();
  const meshEleven = useRef();
  const meshTwelve = useRef();
  const meshThirteen = useRef();
  const meshFourteen = useRef();
  const meshFifteen = useRef();
  const meshSixteen = useRef();
  const meshSeventeen = useRef();
  const meshArray = [
    meshOne,
    meshTwo,
    meshThree,
    meshFour,
    meshFive,
    meshSix,
    meshSeven,
    meshEight,
    meshNine,
    meshTen,
    meshEleven,
    meshTwelve,
    meshThirteen,
    meshFourteen,
    meshFifteen,
    meshSixteen,
    meshSeventeen,
  ];

  /**
   * State
   */
  const [prevMouseX, setPrevMouseX] = useState(0);
  const [prevMouseY, setPrevMouseY] = useState(0);
  const [meshIndex, setNextMeshIndex] = useState(0);
  const [currentMesh, setNextMesh] = useState(meshArray[meshIndex]);
  const [currentYDrop, setNextYDrop] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [currentZRotation, setNextZRotation] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const v = new THREE.Vector3();

  const textureArray = useTexture("./justmarriedneon.jpg");
  textureArray.wrapS = THREE.ClampToEdgeWrapping;
  textureArray.wrapT = THREE.ClampToEdgeWrapping;
  textureArray.minFilter = THREE.NearestFilter;
  textureArray.magFilter = THREE.NearestFilter;

  useFrame(({pointer, camera}) => {
    v.copy({ x: pointer.x, y: pointer.y, z: 0 });
    v.unproject(camera);

    console.log('joe')

    currentMesh.current.rotation.set(0, 0, 0);

    if (
      Math.abs(pointer.x - prevMouseX) >= 0.2 ||
      Math.abs(pointer.y - prevMouseY) >= 0.2
    ) {
      currentYDrop[meshIndex] = 0;

      currentMesh.current.position.copy({ x: v.x, y: v.y, z: v.z });

      if (pointer.x - prevMouseX > 0) {
        currentZRotation[meshIndex] = 0.006;
        setNextYDrop(currentYDrop);
      } else {
        currentZRotation[meshIndex] = -0.006;
        setNextYDrop(currentYDrop);
      }

      setTimeout(() => {
        currentYDrop[meshIndex] = 0.1;
        currentZRotation[meshIndex] = 0;
        setNextZRotation(currentZRotation);
      }, 600);
      

      setNextYDrop(currentYDrop);
      setNextMesh(meshArray[meshIndex]);


      if (meshIndex === meshArray.length - 1) {
        setNextMeshIndex(0);
      } else {
        setNextMeshIndex(meshIndex + 1);
      }

      setPrevMouseX(pointer.x);
      setPrevMouseY(pointer.y);
    }
  });

  useFrame((state, delta) => {
    console.log('biden')

    time += delta;
    velocity += gravity * acceleration

    const easingFunction = (time * time) * velocity;

    console.log(easingFunction)

    // meshOne.current.position.y -= currentYDrop[0];
    meshOne.current.position.y -= currentYDrop[0] * easingFunction;
    meshTwo.current.position.y -= currentYDrop[1] * easingFunction;
    meshThree.current.position.y -= currentYDrop[2] * easingFunction;
    meshFour.current.position.y -= currentYDrop[3] * easingFunction;
    meshFive.current.position.y -= currentYDrop[4] * easingFunction;
    meshSix.current.position.y -= currentYDrop[5] * easingFunction;
    meshSeven.current.position.y -= currentYDrop[6] * easingFunction;
    meshEight.current.position.y -= currentYDrop[7] * easingFunction;
    meshNine.current.position.y -= currentYDrop[8] * easingFunction;
    meshTen.current.position.y -= currentYDrop[9] * easingFunction;
    meshEleven.current.position.y -= currentYDrop[10] * easingFunction;
    meshTwelve.current.position.y -= currentYDrop[11] * easingFunction;
    meshThirteen.current.position.y -= currentYDrop[12] * easingFunction;
    meshFourteen.current.position.y -= currentYDrop[13] * easingFunction;
    meshFifteen.current.position.y -= currentYDrop[14] * easingFunction;
    meshSixteen.current.position.y -= currentYDrop[15] * easingFunction;
    meshSeventeen.current.position.y -= currentYDrop[16] * easingFunction;

    meshOne.current.rotation.z -= currentZRotation[0];
    meshTwo.current.rotation.z -= currentZRotation[1];
    meshThree.current.rotation.z -= currentZRotation[2];
    meshFour.current.rotation.z -= currentZRotation[3];
    meshFive.current.rotation.z -= currentZRotation[4];
    meshSix.current.rotation.z -= currentZRotation[5];
    meshSeven.current.rotation.z -= currentZRotation[6];
    meshEight.current.rotation.z -= currentZRotation[7];
    meshNine.current.rotation.z -= currentZRotation[8];
    meshTen.current.rotation.z -= currentZRotation[9];
    meshEleven.current.rotation.z -= currentZRotation[10];
    meshTwelve.current.rotation.z -= currentZRotation[11];
    meshThirteen.current.rotation.z -= currentZRotation[12];
    meshFourteen.current.rotation.z -= currentZRotation[13];
    meshFifteen.current.rotation.z -= currentZRotation[14];
    meshSixteen.current.rotation.z -= currentZRotation[15];
    meshSeventeen.current.rotation.z -= currentZRotation[16];
  });

  // useFrame((state, delta) => {
  //   time += delta; 

  //   velocity += gravity * acceleration

  //   const newY = initialY - easeOutQuad(time) * velocity;
  //   testRef.current.position.y = newY

  //   if (testRef.current.position.y < -10) {
  //     time = 0;
  //     velocity = 0;
  //     testRef.current.position.y = initialY;
  //   }
  // });

  return (
    <>
      <mesh ref={meshOne} position={[0, -20, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"pink"} />
      </mesh>

      <mesh ref={meshTwo} position={[0, -20, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"green"} />
      </mesh>

      <mesh ref={meshThree} position={[0, -20, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"blue"} />
      </mesh>

      <mesh ref={meshFour} position={[0, -20, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"yellow"} />
      </mesh>

      <mesh ref={meshFive} position={[0, -20, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"brown"} />
      </mesh>

      <mesh ref={meshSix} position={[0, -20, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"white"} />
      </mesh>

      <mesh ref={meshSeven} position={[0, -20, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"purple"} />
      </mesh>

      <mesh ref={meshEight} position={[0, -20, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"gray"} />
      </mesh>
      <mesh ref={meshNine} position={[0, -20, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"tan"} />
      </mesh>
      <mesh ref={meshTen} position={[0, -20, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      <mesh ref={meshEleven} position={[0, -20, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"lightgreen"} />
      </mesh>
      <mesh ref={meshTwelve} position={[0, -20, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"darkgreen"} />
      </mesh>
      <mesh ref={meshThirteen} position={[0, -20, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"darkred"} />
      </mesh>
      <mesh ref={meshFourteen} position={[0, -20, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"darkyellow"} />
      </mesh>
      <mesh ref={meshFifteen} position={[0, -20, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"lightred"} />
      </mesh>
      <mesh ref={meshSixteen} position={[0, -20, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"lightblue"} />
      </mesh>
      <mesh ref={meshSeventeen} position={[0, -20, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"lightgray"} />
      </mesh>


    </>
  );
}
