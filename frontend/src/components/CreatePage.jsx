import React, { useContext } from "react";
import NavBar from "./NavBar";
import RenderObject from "./RenderObject";
import { FilesContext } from "../contexts/FileContextProvider";
import "../styles/CreatePage.css";

/**
 * Create page component parent with a nav bar and possible RenderObject component.
 * @returns jsx
 */
const CreatePage = () => {
  const { filenames, isPending, current } = useContext(FilesContext);

  return (
    <div>
      <NavBar />
      {filenames?.length > 0 && (
        <RenderObject modelUrl={current?.imgURL}></RenderObject>
      )}
      {isPending && (
        <div className="empty-message-box">
          <p className="empty-message">No Files Found. Please Upload.</p>
        </div>
      )}
    </div>
  );
};

export default CreatePage;
