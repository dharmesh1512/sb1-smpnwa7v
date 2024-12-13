import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './components/Scene';
import { Loader } from 'lucide-react';

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-black to-purple-900">
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="text-white text-opacity-80 space-y-4 text-center">
          <h2 className="text-2xl font-light tracking-wider">Scroll to Explore</h2>
          <Loader className="animate-spin mx-auto" size={24} />
        </div>
      </div>
    </div>
  );
}

export default App;