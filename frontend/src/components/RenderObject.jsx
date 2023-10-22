import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Stage } from "@react-three/drei";
import Model from "./renderHelp/Model";
import Lighting from "./renderHelp/Lighting";
import "../styles/RenderObject.css";

/* 
Component to render Three.js canvas.
    - modelUrl: filePath of desired glb model to be rendered 
*/
const RenderObject = ({ modelUrl }) => {

  // settings consts for background color and lightType
  const [backgroundColor, setBackgroundColor] = useState("#7E8A6A");
  const [lightType, setLightType] = useState("ambient");

  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  const filename = modelUrl.split("/").pop();
  const isLightHighlighted = (type) =>
    lightType === type ? "highlighted-button" : "";

  /*

  */
  const getLight = () => {
    switch (lightType) {
      case "directional":
        return <directionalLight intensity={2} position={[5, 5, 5]} />;
      case "point":
        return <pointLight intensity={2} position={[0, 5, 0]} />;
      case "ambient":
        return <ambientLight intensity={2} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="filename-label">{filename}</div>
      <div className="container">
        <div className="renderBox">

          {/* Three.js Canvas for 3D model */}
          <Canvas
            dpr={[1, 2]}
            shadows={{}}
            camera={{ position: [0, 50, 50], fov: 45 }}
            style={{ backgroundColor }}
          >
            <OrbitControls></OrbitControls>
            <Suspense fallback={<Html center>Loading...</Html>}>
              <Stage environment={"sunset"}>
                <Model modelUrl={modelUrl} />
              </Stage>
            </Suspense>
            {getLight()}
          </Canvas>
        </div>
        <div className="box2">
          <div>
            <label htmlFor="backgroundColor">Background:</label>
            <input
              type="color"
              id="backgroundColor"
              value={backgroundColor}
              onChange={handleBackgroundColorChange}
            />
          </div>
          <br />
          <Lighting
            setLightType={setLightType}
            isLightHighlighted={isLightHighlighted}
          />
        </div>
      </div>
    </div>
  );
};

export default RenderObject;