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


  useFrame((state) => {
    v.copy({ x: state.pointer.x, y: state.pointer.y, z: 0 });
    v.unproject(state.camera);

    currentMesh.current.rotation.set(0, 0, 0);

    if (
      Math.abs(state.pointer.x - prevMouseX) >= 0.2 ||
      Math.abs(state.pointer.y - prevMouseY) >= 0.2
    ) {
      currentYDrop[meshIndex] = 0;

      currentMesh.current.position.copy({ x: v.x, y: v.y, z: v.z });

      if (state.pointer.x - prevMouseX > 0) {
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
    meshSeven.current.position.y -= currentYDrop[6];
    meshEight.current.position.y -= currentYDrop[7];
    meshNine.current.position.y -= currentYDrop[8];
    meshTen.current.position.y -= currentYDrop[9];
    meshEleven.current.position.y -= currentYDrop[10];
    meshTwelve.current.position.y -= currentYDrop[11];
    meshThirteen.current.position.y -= currentYDrop[12];
    meshFourteen.current.position.y -= currentYDrop[13];
    meshFifteen.current.position.y -= currentYDrop[14];
    meshSixteen.current.position.y -= currentYDrop[15];
    meshSeventeen.current.position.y -= currentYDrop[16];

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

  // useFrame(() => {
  //   // Lerp the rotation
  //   setCurrentRotation((currentRotation) => {
  //     const nextRotation = THREE.MathUtils.lerp(
  //       currentRotation,
  //       targetRotation,
  //       0.05 // Set the lerp amount to 0.05
  //     );
  //     testRef.current.rotation.z = nextRotation;
  //     return nextRotation;
  //   });
  // });

  return (
    <>
      <mesh ref={meshOne} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"red"} />
      </mesh>

      <mesh ref={meshTwo} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"green"} />
      </mesh>

      <mesh ref={meshThree} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"blue"} />
      </mesh>

      <mesh ref={meshFour} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"yellow"} />
      </mesh>

      <mesh ref={meshFive} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"brown"} />
      </mesh>

      <mesh ref={meshSix} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"white"} />
      </mesh>

      <mesh ref={meshSeven} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"purple"} />
      </mesh>

      <mesh ref={meshEight} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"gray"} />
      </mesh>
      <mesh ref={meshNine} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"tan"} />
      </mesh>
      <mesh ref={meshTen} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      <mesh ref={meshEleven} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"lightgreen"} />
      </mesh>
      <mesh ref={meshTwelve} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"darkgreen"} />
      </mesh>
      <mesh ref={meshThirteen} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"darkred"} />
      </mesh>
      <mesh ref={meshFourteen} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"darkyellow"} />
      </mesh>
      <mesh ref={meshFifteen} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"lightred"} />
      </mesh>
      <mesh ref={meshSixteen} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"lightblue"} />
      </mesh>
      <mesh ref={meshSeventeen} position={[0, 10, 0]}>
        <planeGeometry args={[2.5, 3.25]} />
        <meshStandardMaterial color={"lightgray"} />
      </mesh>
    </>
  );
}
