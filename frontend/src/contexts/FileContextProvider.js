import { useState, createContext, useEffect, useCallback } from "react";
import { projectFirestore } from "../config/config";

export const FilesContext = createContext();

/**
 * A "global variable" that handles all the file information that can be called from anywhere in the app.
 * Allows front end to continuously have the latest information about files. 
 */
const FileContextProvider = ({ children }) => {
  const [filenames, setFilenames] = useState([]);
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(true);
  const [current, setCurrent] = useState(null); // Initialize with null

  const getCurrentImg = (id) => {
    const selected = filenames.find((file) => file.id === id);
    setCurrent(selected);
  };

  const fetchFilenames = useCallback(() => {
    const unsub = projectFirestore.collection("files").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("No files to fetch yet");
          setIsPending(true);
        } else {
          const results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setFilenames(results);
          setIsPending(false);
          setCurrent(results[0] || null); 
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(true);
      }
    );
    return () => unsub();
  }, []);

  useEffect(() => {
    fetchFilenames();
  }, [fetchFilenames]);

  return (
    <FilesContext.Provider
      value={{ filenames, fetchFilenames, error, getCurrentImg, current, isPending }}
    >
      {children}
    </FilesContext.Provider>
  );
};

export default FileContextProvider;
