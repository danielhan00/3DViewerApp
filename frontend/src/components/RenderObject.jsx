import React, { useState, Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Stage } from "@react-three/drei";
import Model from "./renderHelp/Model";
import Lighting from "./renderHelp/Lighting";
import "../styles/RenderObject.css";

/**
 * Handles all aspects of rendering a 3D model from initial model creation to customization of the model.
 * @param {string} modelUrl
 * @returns
 */
const RenderObject = ({ modelUrl }) => {
  const [backgroundColor, setBackgroundColor] = useState("#7E8A6A");
  const [lightType, setLightType] = useState("ambient");

  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  // extracting the filename from the modelUrl (doing this manually)
  const filename = modelUrl.substring(84, modelUrl.length - 53);

  const isLightHighlighted = (type) =>
    lightType === type ? "highlighted-button" : "";

  const canvasRef = useRef();

  // Handles when the Download Image button is pressed by converting the current canvas to a downloadable jpg file.
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

  // Gets current light according to a toggle-able lightType.
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
          {/* 3D Model React Three Canvas*/}
          <Canvas
            dpr={[1, 2]}
            shadows={{}}
            camera={{ fov: 45 }}
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

        {/* Options box to change 3D Render Settings*/}
        <div className="options-box">
          <div>
            <label htmlFor="backgroundColor">Background</label>
            <br />
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
        </div>
      </div>
    </div>
  );
};

export default RenderObject;
