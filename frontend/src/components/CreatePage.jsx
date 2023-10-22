import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import RenderObject from "./RenderObject";

// Renders the CreatePage.
const CreatePage = () => {
  return (
    <div>
      <NavBar />
      <RenderObject modelUrl={"totoro.glb"}></RenderObject>
    </div>
  );
};

export default CreatePage;
