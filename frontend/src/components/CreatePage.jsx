import React, {useContext} from "react";
import io from "socket.io-client";
import NavBar from "./NavBar";
import RenderObject from "./RenderObject";
import { FilesContext } from "../contexts/FileContextProvider";

// Renders the CreatePage.
const CreatePage = () => {
  const {filenames} = useContext(FilesContext);
  // const [filenames, setFilenames] = useState([]);

  // // get json from the api
  // // store json objects as strings of filenames in an array
  // // use that array to determine what to render


  // const fetchFilenames = () => {
  //   fetch("/api/filenames") // Assumes your API is running on the same domain
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Request failed");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("API Response:", data);
  //       setFilenames(data.filenames);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching filenames:", error);
  //     });
  //   };

  // useEffect(() => {
  //   // Listen for changes in filenames from the server
  //   // Initial fetch of filenames
  //   fetchFilenames();
  // }, [fetchFilenames]);
  // //const fetch = useCallback(())
  

  return (
    
    <div>
      <div>
      <h2>List of Filenames</h2>
      <ul>
        {filenames?.map((filename, index) => (
          <li key={index}>{filename}</li>
        ))}
      </ul>
    </div>
      <NavBar />
      <RenderObject modelUrl={"totoro.glb"}></RenderObject>
    </div>
  );
};

export default CreatePage;
