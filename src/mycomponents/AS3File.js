function AS3File(props) {
    return (
        <div>
            <h3>{props.fileInfo.key}</h3>
            <p>Size: {props.fileInfo.size}</p>
     
        </div>
  
    );
}

export default AS3File;