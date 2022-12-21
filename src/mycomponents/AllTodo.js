import ATodo from "./ATodo"

function AllTodo(props) {
    console.log("PRINT")
    console.log(props.todos)
    return (
        <>
            <h2>ALL Todo</h2>
            <ul>
                {props.todos.map((todo) => <ATodo todoInfo={todo} />)}
            </ul>
        </>
    );

}

export default AllTodo;