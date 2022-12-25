import '../App.css';
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from '../models';

import AllTodo from '../mycomponents/AllTodo.js';
import React, { useState, useEffect } from "react";
import TodoCreateForm from "../ui-components/TodoCreateForm.jsx"



function AppTodo() {

  useEffect(() => {

    const subscription = DataStore.observeQuery(

      Todo).subscribe(snapshot => {
          const { items, isSynced } = snapshot;
          console.log(`[Snapshot] item count: ${items.length}, isSynced: ${isSynced}`);
          setTodosrealtime(items);
      });

    return () => subscription.unsubscribe();
  }, []);

  //const posts =[]
  const [todos, setTodos] = useState([{ name: "Task Name", description: "Clean dishes", isComplete: false }]);
  const [todosrealtime, setTodosrealtime] = useState([{ name: "10adsf", description: "Eat dinner", isComplete: false }]);

  const handlePush = async () => {
    const todos = await DataStore.query(Todo);
    console.log(todos);
    setTodos(todos)
  }

  return (
    
    <div>
   
        <TodoCreateForm />
        <br></br>
        <button onClick={handlePush}>GET ALL todos</button>

        <AllTodo todos={todosrealtime} />
        <AllTodo todos={todos} />
    
    </div>
  );
}

export default AppTodo;

