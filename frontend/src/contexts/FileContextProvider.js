import { useState, createContext, useEffect, useCallback } from "react";
import { projectFirestore } from "../config/config";


export const FilesContext = createContext();
// ... (previous code remains unchanged)

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
          // Set the current to the first item after filenames have been fetched
          setCurrent(results[0] || null); // Make sure to handle case where results is empty
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
