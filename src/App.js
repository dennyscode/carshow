import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Ground } from './Ground'
import './style.css'
import { Car } from './Car'
import { Rings } from './Rings'
import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';

function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45}></OrbitControls>
      <PerspectiveCamera makeDefault for={50} position={[3,2,5]}></PerspectiveCamera>

      {/* <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={'red'} />
      </mesh> */}

      {/* let color = new Color(0,0,0); */}
      <color args={[0,0,0]} attach="background" />

      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Car />
          </>
        )}
      </CubeCamera>

      <Rings />

      {/* let spotlight = new Spotlight();
      spotlight.intensity = 1.5;
      spotlight.position.set(...) */}

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5,5,0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5,5,0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Ground />
    </>
  )
}

function App() {
  return(
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />

      </Canvas>

    </Suspense>
  );
}

export default App;