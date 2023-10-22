import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import RenderObject from "./RenderObject";

const CreatePage = () => {
  return (
    <div>
      <NavBar />
      <RenderObject modelUrl={"totoro.glb"}></RenderObject>
    </div>
  );
};

export default CreatePage;
