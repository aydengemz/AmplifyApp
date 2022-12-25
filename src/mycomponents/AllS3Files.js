import AS3File from "./AS3File";


function AllS3Files(props) {
    return (
        <>
            <h1>ALL Files</h1>
            <ul>
                {props.files.map((file) => <AS3File fileInfo = {file}/>)}
            </ul>
        </>
    );

}

export default AllS3Files;


