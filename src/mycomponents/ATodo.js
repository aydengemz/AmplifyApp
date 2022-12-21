function ATodo(props) {
    return (
        <div>
            <h3>{props.todoInfo.name}</h3>
            <p>Info: {props.todoInfo.description}</p>
        </div>
  
    );
}

export default ATodo;