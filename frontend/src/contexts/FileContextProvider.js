import {useState, createContext, useEffect, useCallback} from "react"


export const FilesContext = createContext()
const FileContextProvider = ({children})=>{
    const [filenames, setFilenames] = useState([]);

    // get json from the api
    // store json objects as strings of filenames in an array
    // use that array to determine what to render
  
  
    const fetchFilenames = useCallback(() => {
      fetch("http://localhost:8000/api/filenames") // Assumes your API is running on the same domain
        .then((response) => {
          if (!response.ok) {
            throw new Error("Request failed");
          }
          return response.json();
        })
        .then((data) => {
          console.log("API Response:", data);
          setFilenames(data.filenames);
        })
        .catch((error) => {
          console.error("Error fetching filenames:", error);
        });
      }, []);
  
    useEffect(() => {
      // Listen for changes in filenames from the server
      // Initial fetch of filenames
      fetchFilenames();
    }, [fetchFilenames]);
    //const fetch = useCallback(())
    return(
    <FilesContext.Provider value={{filenames, fetchFilenames}}>
            {children}
    </FilesContext.Provider>
    )
}

export default FileContextProvider