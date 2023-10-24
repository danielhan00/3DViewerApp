import React, { useContext } from "react";
import NavBar from "./NavBar";
import RenderObject from "./RenderObject";
import { FilesContext } from "../contexts/FileContextProvider";

// Renders the CreatePage.
const CreatePage = () => {
  const { filenames, isPending, getCurrentImg, current } =
    useContext(FilesContext);

  console.log("current", current);

  return (
    <div>
      <NavBar />
      {filenames?.length > 0 && (
        <RenderObject modelUrl={current?.imgURL}></RenderObject>
      )}
      {isPending && <p>No files. Please Upload Above!</p>}
    </div>
  );
};

export default CreatePage;
