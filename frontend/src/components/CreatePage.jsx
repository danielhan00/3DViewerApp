import React from "react";
import RenderObject from "./RenderObject";
import SettingsBar from "./SettingsBar";

const CreatePage = () => {
  return (
    <div>
      <SettingsBar></SettingsBar>
      <RenderObject modelUrl={'/totoro.glb'}/>
    </div>
  );
};

export default CreatePage;
