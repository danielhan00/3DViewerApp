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
      {isPending && (
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}>
          <div style={{
            border: "5px solid #000",
            margin: "10px",
            width: "50%",
            boxSizing: "border-box",
            backgroundColor: "#a3e0c6"
          }}>
            <p style={{ textAlign: "center", color: "black" }}>
              No files. Please Upload Above!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePage;
