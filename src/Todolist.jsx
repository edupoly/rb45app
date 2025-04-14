import React from "react";
import Todo from "./Todo";
function Todolist(props){
    var [todos,setTodos] = React.useState(["todo1","todo2","todo3","todo4","todo5","todo6"]);
    var [newtodo,setnewtodo] = React.useState("")
    function addTodo(){
        // todos.push(document.getElementById("d1").value)//state variable are immutable
        setTodos([...todos,newtodo])
        console.log(todos);
    }
    var delTodo=React.useCallback(function(index){
        var temp = [...todos];
        temp.splice(index,1)
        setTodos([...temp])
    },[])
    return (
        <div className='border border-2 border-info p-3 m-3'>
            <h2>{props.listname} Todolist</h2>
            <input type="text" onChange={(e)=>{setnewtodo(e.target.value)}}/>
            <button onClick={()=>{addTodo()}}>Add Todo</button>
            <ul>
                {
                    todos.map((todo,i)=>{
                        return  <Todo todo={todo} i={i} delTodo={delTodo}></Todo>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist;
// seperation of concern // loosely coupled //refactoring
// logic main component // smart component // container component
// view child component //dumb component // presentational component