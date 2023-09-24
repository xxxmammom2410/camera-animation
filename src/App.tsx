import { useState, useRef } from 'react';
import * as THREE from "three";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Annotation from './Annotation';
import CameraAnimation from './CameraAnimation';
import './App.css'

function App() {
  const initialCameraDist = new THREE.Vector3(12, 6, 10);
  const [cameraDist, setCameraDist] = useState(initialCameraDist);
  const cameraPosA = [15, 10, 20];
  const cameraPosB = [-30, 30, 40];

  // lookatの位置をmeshから取得する
  // const ref = useRef<THREE.Mesh>(null);

  return (
    <>
      <div id='canvas-container'>
        <Canvas camera={{ position: [0, 3, 24] }}>
          <mesh
          // ref={ref}
          >
            <boxGeometry />
            <meshBasicMaterial color="blue" />
          </mesh>

          <Annotation position={[5, 1, 0]} setCameraDist={setCameraDist} distPos={cameraPosA}>
            <h1>CameraPosA</h1>
          </Annotation>
          <Annotation position={[-5, 1, 0]} setCameraDist={setCameraDist} distPos={cameraPosB}>
            <h1>CameraPosB</h1>
          </Annotation>
          <CameraAnimation
            cameraDist={cameraDist}
          // lookatDist={ref.current?.position} 
          />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  )
}

export default App
