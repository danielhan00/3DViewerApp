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

  const handleDelete = async (file) => {
    try {
      // Reference to the file in Firebase Storage
      const storageRef = firebase.storage().ref().child(`thumbnails/${file.name}`);

      // Reference to the document in Cloud Firestore
      const firestoreRef = firebase.firestore().collection("files").doc(file.id);

      // Delete the file from Firebase Storage
      await storageRef.delete();

      // Delete the corresponding document from Cloud Firestore
      await firestoreRef.delete();

      console.log("File and Firestore document deleted successfully.");
    } catch (error) {
      console.error("Error deleting file and Firestore document:", error);
    }
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
