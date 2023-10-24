import React, { createRef, useContext , useState} from 'react';
import { projectFirestore, projectStorage } from '../config/config'
import { FilesContext } from "../contexts/FileContextProvider";
import "../styles/UploadForm.css";

function UploadForm() {
  

 const [thumbnail, setThumbnail] = useState(null)
 const [isPending, setisPending] = useState(false)
 const {fetchFilenames, current} = useContext(FilesContext)

 const handleFileUpload = (e) =>{
  const selected = e.target.files[0] 
  setThumbnail(selected)
 }
  
 const onSubmit = async (e) =>{
    e.preventDefault()
    alert("upload image")
    setisPending(true)
    const uploadPath = `thumbnails/${thumbnail.name}`
  const img =  await projectStorage.ref(uploadPath).put(thumbnail)
  const imgURL = await img.ref.getDownloadURL()

   // creating a file
   const doc = { name: thumbnail.name, imgURL }
    try{
     
      await projectFirestore.collection("files").add(doc)
      fetchFilenames()
      console.log("file uploaded")
      setisPending(false)
    }
    catch(err){
      console.log(err)
      setisPending(false)
    }

 
 }

  return (
    <div className="submit">
      <form onSubmit={onSubmit}>
        <input type="file"  onChange={handleFileUpload}/>
        {!isPending && <button>Upload</button>}
        {isPending && <button disabled>Uploading</button>}
      </form>
    </div>
  );
}

export default UploadForm;