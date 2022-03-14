import "./App.css";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Body from "./components/Earth/Earth";

const App = () => {
  return (
    <div className="App">
      <div className="earth">
        <Canvas camera={{ position: [0.5, 0.7, -2] }}>
          <Suspense fallback={null}>
            <Body />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default App;
