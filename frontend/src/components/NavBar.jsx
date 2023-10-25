import React, { useState, useContext } from "react";
import { FilesContext } from "../contexts/FileContextProvider";
import "../styles/NavBar.css";
import UploadForm from "./UploadForm";
import DeleteFileButton from "./DeleteFileButton";

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
        </ul>
      )}
    </div>
  );
};

/*
    NavBar component
    - Creates a NavBar that has a title and two functional buttons.
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
