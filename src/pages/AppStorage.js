import { Storage } from "@aws-amplify/storage"
import { useState } from "react";
import AllS3Files from "../mycomponents/AllS3Files";

const AppStorage=() => {

    async function onChange(e) {
        const file = e.target.files[0];
        try {
          await Storage.put(file.name, file, {
            //contentType: "image/png", // contentType is optional
          });
        } catch (error) {
          console.log("Error uploading file: ", error);
        }
      }

    async function listFiles(){
        Storage.list('') 
        .then((result) =>  setFiles(result.results))
        .catch((err) => console.log(err));

    }

    const [files, setFiles] = useState([]);
  
    return (
        <div>
        <h1>storage</h1>
        <input type="file" onChange={onChange} />
        <br></br>
        <br></br>
        <button onClick={listFiles}>Get All Files</button>
        <AllS3Files files = {files}/>
        </div>

    )

}

export default AppStorage;