import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";


// Loads the model with a given modelUrl.
const Model = ({ modelUrl }) => {

  const gltf = useLoader(GLTFLoader, modelUrl);
  return <primitive object={gltf.scene} />;
};

export default Model;
