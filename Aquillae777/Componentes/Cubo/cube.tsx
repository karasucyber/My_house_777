import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

function Box(props: ThreeElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (mesh.current.rotation.x += delta))
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1,1,1]} />
      <meshStandardMaterial color={hovered ? 'black' : 'blue'} />
    </mesh>
  )
}


const Cubo = () => { 
    return(  
         <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        
      </Canvas>)

}

export default Cubo;

