import React, { useState, useContext } from "react";
import { FilesContext } from "../contexts/FileContextProvider";
import "../styles/NavBar.css";
import UploadForm from "./UploadForm";
import DeleteFileButton from "./DeleteFileButton";
import DeleteAllFilesButton from "./DeleteAllFilesButton";

/**
 * Dropdown menu helper component used in the NavBar.
 * @returns jsx.
 */
const DropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const { filenames, getCurrentImg } = useContext(FilesContext);

  const handleClick = (id) => {
    getCurrentImg(id);
  };

  return (
    <div className="dropdown-menu">
      <button onClick={toggleDropdown} className="dropdown-button">
        All Files <img src="/dropdown.png" className="dropdown-icon" />
      </button>
      {isDropdownOpen && (
        <ul className="dropdown-list">
          {filenames.map((filename, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleClick(filename.id)}
            >
              {filename.name}
              <DeleteFileButton file={filename} />
            </li>
          ))}
          <li>
            <DeleteAllFilesButton></DeleteAllFilesButton>
          </li>
        </ul>
      )}
    </div>
  );
};

/**
 * Navigation Bar component for the top of the Create page.
 * Holds a Title, Upload form component, and a dropdown menu.
 * @returns jsx
 */
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1 className="title">3D Model Viewer</h1>
      </div>
      <div className="navbar-buttons">
        <UploadForm></UploadForm>
        <DropdownMenu></DropdownMenu>
      </div>
    </nav>
  );
}

export default NavBar;
