import React, { createRef } from 'react';

function SettingsBar() {
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
      


  return (
    <div>
      <h1>File Upload App</h1>
      <form onSubmit={onSubmit}>
        <input type="file" name="avatar" ref={fileInput}></input>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}

export default SettingsBar;