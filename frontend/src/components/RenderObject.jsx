import React, { useState, Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Stage } from "@react-three/drei";
import Model from "./renderHelp/Model";
import Lighting from "./renderHelp/Lighting";
import "../styles/RenderObject.css";

const RenderObject = ({ modelUrl }) => {
  const [backgroundColor, setBackgroundColor] = useState("#7E8A6A");
  const [lightType, setLightType] = useState("ambient");

  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  const filename = modelUrl.split("/").pop();
  const isLightHighlighted = (type) =>
    lightType === type ? "highlighted-button" : "";

  const canvasRef = useRef();

  const handleDownloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "rendered_image.jpg";
        a.click();
        URL.revokeObjectURL(url);
      }
    });
  };

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
          <Canvas
            dpr={[1, 2]}
            shadows={{}}
            camera={{ position: [0, 50, 50], fov: 45 }}
            ref={canvasRef}
            gl={{ preserveDrawingBuffer: true }}
          >
            <color attach="background" args={[backgroundColor]} />
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
          <br />
          <button onClick={handleDownloadImage}>Download Image</button>{" "}
          {/* Step 4: Add the download button */}
        </div>
      </div>
    </div>
  );
};

export default RenderObject;
