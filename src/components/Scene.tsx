import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Float } from '@react-three/drei';
import { Mesh } from 'three';

export function Scene() {
  const boxRef = useRef<Mesh>(null);
  
  useFrame((state, delta) => {
    if (boxRef.current) {
      boxRef.current.rotation.x += delta * 0.2;
      boxRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Float
        speed={4}
        rotationIntensity={1}
        floatIntensity={2}
        position={[0, 0, 0]}
      >
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Welcome
          <meshStandardMaterial color="#88c6ff" />
        </Text3D>
      </Float>

      <mesh ref={boxRef} position={[0, -2, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ff88ff" />
      </mesh>
    </>
  );
}