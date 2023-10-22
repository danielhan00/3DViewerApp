import React from "react";
import UploadButton from "./UploadButton";
import "../styles/SettingsBar.css";

const SettingsBar = () => {
  return (
    <div className="settings-bar">
      <h2 style={{ color: "#ffffff" }}>3D Object Model Viewer</h2>
      <div className="button-container">
        <button className="button">Save Frame</button>
        <button className="button">Other Images</button>
        <UploadButton className="button">Upload</UploadButton>
      </div>
    </div>
  );
};

export default SettingsBar;
