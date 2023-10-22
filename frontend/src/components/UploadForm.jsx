import React, { createRef } from 'react';

// Component to handle user upload and interaction with backend server.
function UploadForm() {
  const fileInput = createRef();
 
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("avatar", fileInput.current.files[0]);

    try {
      const response = await fetch("/profile", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        alert("File uploaded successfully!");
      }
      else {
        console.error("File could not upload");
      }
    }catch (e) {
      console.error(e.message);
    }
  };
      

  console.log("avatar");
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="file" name="avatar" accept=".glb" ref={fileInput}></input>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}

export default UploadForm;