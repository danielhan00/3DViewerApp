import React, { useState } from 'react';

/**
 * Used for upload to a local node server. 
 * @returns jsx
 */
const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    console.log(e.target)
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;