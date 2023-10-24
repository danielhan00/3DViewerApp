import React, { useContext } from "react";
import NavBar from "./NavBar";
import RenderObject from "./RenderObject";
import { FilesContext } from "../contexts/FileContextProvider";

// Renders the CreatePage.
const CreatePage = () => {

  const { filenames, isPending, getCurrentImg, current } = useContext(FilesContext)


  console.log("current", current)
  const fileList = filenames?.map(file => {
    return (
      <li key={file.id}>
        <p>{file.name}</p>
      </li>
    )
  })



  return (
    <div>
      <NavBar />
      {filenames?.length > 0 && (
        <div>
          <div>
            <ul>
              {fileList}
            </ul>
          </div>
          <RenderObject
            modelUrl={current?.imgURL}
          ></RenderObject>
        </div>
      ) }
        {isPending && <p>Loading files</p>}

    </div>
  );
};

export default CreatePage;
