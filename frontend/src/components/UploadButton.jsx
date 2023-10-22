import React from "react";
import '../styles/SettingsBar.css';

const UploadButton = () => {
  const handleUpload = () => {
    alert("Upload file prompt here");
  };

  return <button className="button" onClick={handleUpload}>Upload GLB File</button>;
};

export default UploadButton;
