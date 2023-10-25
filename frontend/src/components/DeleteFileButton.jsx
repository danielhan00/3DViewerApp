import React from "react";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

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

      // Reload the page
      window.location.reload();
      
      console.log("File and Firestore document deleted successfully.");
    } catch (error) {
      console.error("Error deleting file and Firestore document:", error);
    }
  };

  return (
    <button onClick={handleDelete}>X</button>
  );
};

export default DeleteFileButton;
