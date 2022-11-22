import React, { useState } from "react";
import "./App.css";
import TodoTables from "./components/TodoTables";
import NewTodoForm from "./components/NewTodoForm";

function App() {

  const [showTodoForm, setShowTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "user one" },
    { rowNumber: 2, rowDescription: "water plants", rowAssigned: "user two" },
    { rowNumber: 3, rowDescription: "make dinner", rowAssigned: "user one" },
    {
      rowNumber: 4,
      rowDescription: "Charge phone battery",
      rowAssigned: "user one",
    },
    {
      rowNumber: 5,
      rowDescription: "Clean bath room",
      rowAssigned: "user three",
    },
  ]);

  const addToDo = (description, assigned) => {
    let rowNumber = 0;

    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber +1;
    }
    else{
      rowNumber = 1;

    }
      const newTodo = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned,
      };
      setTodos((todos) => [...todos, newTodo]);
    }

    const deleteTodo =(deletetodoRowNumber)=>{
      let filtered = todos.filter(function(value){
        return value.rowNumber !== deletetodoRowNumber;
      });
      setTodos(filtered);
    }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Family Tasks and Your Todos</div>
        <div className="card-body">
          <TodoTables todos={todos} deleteTodo ={deleteTodo} />
          <button onClick={()=>setShowTodoForm(!showTodoForm)} className="btn btn-primary" >
         { showTodoForm ? 'Close New Todo': 'New Todo'}
          </button>
          {showTodoForm && <NewTodoForm addToDo ={addToDo}/> }
          
        </div>
      </div>
    </div>
  );
}

export default App;