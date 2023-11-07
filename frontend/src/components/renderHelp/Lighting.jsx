import React from "react";

/**
 * Component to handle lighting changes as a set of buttons.
 * @param {*} setLightType function to set light type.
 * @param {*} isLightHighlighted toggle function.
 * @returns jsx 
 */
const Lighting = ({ setLightType, isLightHighlighted }) => {
  const handleLightTypeChange = (type) => {
    setLightType(type);
  };

  return (
    <div>
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
