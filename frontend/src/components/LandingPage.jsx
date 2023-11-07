import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

/**
 * Landing Page component
 * Three main components of the main component:
 * - Title/Description
 * - Login
 * - Start Button
 * @returns jsx
 */
const LandingPage = () => {
  // React Router's useNavigate
  const history = useNavigate();

  // handles a Start click event and takes the user to the Create page.
  const handleStart = () => {
    history("/create");
  };

  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="landing-title">Interactive 3D Model Viewer</div>
        <div className="landing-description">Welcome to Daniel's Interactive 3D Model Viewer for Simacro.</div>
        <div className="landing-buttons">
          <button className="start-button" onClick={handleStart}>
            Start
          </button>
        </div>
        <div className="footer">
          User Guide and Code Repository can be found{" "}
          <a href="https://github.com/danielhan00/3DViewerApp">here.</a>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
