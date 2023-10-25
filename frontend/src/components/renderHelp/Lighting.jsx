import React from "react";

// Handles lighting changes.
const Lighting = ({ setLightType, isLightHighlighted }) => {
  const handleLightTypeChange = (type) => {
    setLightType(type);
  };

  return (
    <div>
      <label>Lighting</label>
      <button
        className={isLightHighlighted("directional")}
        onClick={() => handleLightTypeChange("directional")}
      >
        Directional
      </button>
      <button
        className={isLightHighlighted("point")}
        onClick={() => handleLightTypeChange("point")}
      >
        Point
      </button>
      <button
        className={isLightHighlighted("ambient")}
        onClick={() => handleLightTypeChange("ambient")}
      >
        Ambient
      </button>
    </div>
  );
};

export default Lighting;
