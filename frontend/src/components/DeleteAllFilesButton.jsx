import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import { FilesContext } from "../contexts/FileContextProvider";
import "../styles/DeleteAllFilesButton.css";

/**
 * Deletes all file reference from firebase cloud storage and cloud firestore.
 */
const DeleteAllsFilesButton = () => {
  const { filenames } = useContext(FilesContext);
  const handleDelete = async () => {
    for (const file of filenames) {
      try {
        // Reference to the file in Firebase Storage
        const storageRef = firebase
          .storage()
          .ref()
          .child(`thumbnails/${file.name}`);

        // Reference to the document in Cloud Firestore
        const firestoreRef = firebase
          .firestore()
          .collection("files")
          .doc(file.id);

        // Delete the file from Firebase Storage
        await storageRef.delete();

        // Delete the corresponding document from Cloud Firestore
        await firestoreRef.delete();

        // Reload the page to retrieve latest objects
        window.location.reload();
      } catch (error) {
        alert("Error deleting file and Firestore document:", error);
      }
    }
  };

  return <button className="delete-files-button" onClick={handleDelete}>Delete All Files</button>;
};

export default DeleteAllsFilesButton;
