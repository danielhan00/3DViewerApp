import React from "react";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

/**
 * Deletes a given file reference from firebase cloud storage and cloud firestore.
 * @param {*} file a file reference to be deleted. 
 * @returns 
 */
const DeleteFileButton = ({ file }) => {
  const handleDelete = async () => {
    try {
      // Reference to the file in Firebase Storage
      const storageRef = firebase.storage().ref().child(`thumbnails/${file.name}`);
      
      // Reference to the document in Cloud Firestore
      const firestoreRef = firebase.firestore().collection("files").doc(file.id);
      
      // Delete the file from Firebase Storage
      await storageRef.delete();

      // Delete the corresponding document from Cloud Firestore
      await firestoreRef.delete();

      // Reload the page to retrieve latest objects
      window.location.reload();
      
    } catch (error) {
      alert("Error deleting file and Firestore document:", error);
    }
  };

  return (
    <button onClick={handleDelete}>X</button>
  );
};

export default DeleteFileButton;
