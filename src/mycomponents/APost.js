function APost(props) {
    return (
        <div>
            <h3>{props.postInfo.title}</h3>
            <p>Rating: {props.postInfo.rating}</p>
            <p>Content: {props.postInfo.content}</p>
        </div>
  
    );
}

export default APost;