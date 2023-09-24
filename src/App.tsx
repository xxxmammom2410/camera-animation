// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
// import { OrbitControls } from '@react-three/drei';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div id='canvas-container'>
      <Canvas camera={{ position: [0, 3, 4] }}>
        {/* <OrbitControls> */}
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color="blue" />
          </mesh>

          <Html>
            <div className="annotation">
              <h1>hello</h1>
            </div>
          </Html>
        {/* </OrbitControls> */}
      </Canvas>
      </div>

    </>
  )
}

export default App
