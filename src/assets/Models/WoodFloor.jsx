import * as THREE from 'three'


export function WoodFloor(){

    const floorMaterial = new THREE.MeshStandardMaterial({color: "#d2a38c"})
    const floorGeometry = new THREE.BoxGeometry(1, 1, 1)


    return(<>
        <mesh material={floorMaterial} geometry={floorGeometry} receiveShadow>
        </mesh>

        <mesh material={floorMaterial} geometry={floorGeometry} position={[0.51, 0, 0]} receiveShadow>
        </mesh>

        <mesh material={floorMaterial} geometry={floorGeometry} position={[1.03, 0, 0]} receiveShadow>
        </mesh>

        <mesh material={floorMaterial} geometry={floorGeometry} position={[1.55, 0, 0]} receiveShadow>
        </mesh>
    </>
    )
}