import React, { createRef } from "react";
import "../styles/NavBar.css";
import UploadForm from "./UploadForm";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1>My App</h1>
      </div>
      <div className="navbar-buttons">
        <UploadForm></UploadForm>
        <button className="button">All Uploaded Files</button>
      </div>
    </nav>
  );
}

export default NavBar;
