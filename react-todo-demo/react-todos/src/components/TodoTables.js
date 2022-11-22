import TodoRowItem from "./TodoRowItems";
const TodoTables = (props)=>{
    return(
        <table className="table table-hover" >
        <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col"> Task Description</th>
                <th scope="col"> Task Assigned to </th>
              </tr>
        </thead>
        <tbody>
            {/*Rendering React Lists Dynamically, using map. Here we can witness the power of a map*/}
            {props.todos.map(todo=>(
               <TodoRowItem
               key={todo.rowNumber}
               rowNumber ={todo.rowNumber}
               rowDescription={todo.rowDescription}
               rowAssigned={todo.rowAssigned}
               deleteTodo = {props.deleteTodo}
               /> 
            ))}
            </tbody>
        </table>     
    )
}
export default TodoTables;