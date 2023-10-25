import React, { useContext, useState } from "react";
import { projectFirestore, projectStorage } from "../config/config";
import { FilesContext } from "../contexts/FileContextProvider";
import "../styles/UploadForm.css";

/**
 * Component to handle user upload to and from firebase.
 * @returns jsx
 */
function UploadForm() {
  const [thumbnail, setThumbnail] = useState(null);
  const [isPending, setisPending] = useState(false);
  const { fetchFilenames } = useContext(FilesContext);

  // handles firebase file uploading.
  const handleFileUpload = (e) => {
    const selected = e.target.files[0];
    setThumbnail(selected);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    alert("Currently uploading file!");
    setisPending(true);
    const uploadPath = `thumbnails/${thumbnail.name}`;
    const img = await projectStorage.ref(uploadPath).put(thumbnail);
    const imgURL = await img.ref.getDownloadURL();

    // creating a file as a reference for firebase operations.
    const doc = { name: thumbnail.name, imgURL };
    try {
      await projectFirestore.collection("files").add(doc);
      fetchFilenames();
      setisPending(false);
    } catch (err) {
      setisPending(false);
    }
  };

  return (
    <div className="submit">
      <form onSubmit={onSubmit} className="submit-form">
        <input className="file-input-name" type="file" accept=".glb" onChange={handleFileUpload} />
        {!isPending && <button className="file-loading-button">Upload</button>}
        {isPending && <button className="file-loading-button" disabled>Uploading</button>}
      </form>
    </div>
  );
}

export default UploadForm;
