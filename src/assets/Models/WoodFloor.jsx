import * as THREE from "three";

export function WoodFloor() {
  THREE.ColorManagement.legacyMode = false;
  const floorMaterial = new THREE.MeshStandardMaterial({
    color: "#ffa54f",
    roughness: 0,
  });
  const floorGeometry = new THREE.BoxGeometry(0.3, 0.08, 5);

  return (
    <>
      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[-3.72, 0.04, 0]}
        receiveShadow
      ></mesh>
      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[-3.41, 0.04, 0]}
        receiveShadow
      ></mesh>
      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[-3.10, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[-2.79, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[-2.48, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[-2.17, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[-1.86, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[-1.55, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[-1.24, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[-0.93, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[-0.62, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[-0.31, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[0, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[0.31, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[0.62, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[0.93, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[1.24, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[1.55, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[1.86, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[2.17, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[2.48, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[2.79, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[3.1, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[3.41, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[3.72, 0.04, 0]}
        receiveShadow
      ></mesh>

      <mesh
        material={floorMaterial}
        geometry={floorGeometry}
        position={[2.48, 0.04, 0]}
        receiveShadow
      ></mesh>
    </>
  );
}
