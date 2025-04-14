import React from 'react'

function Todo(props) {
    console.log("todo item rendered");
  return (
            <li className='p-2 m-2 border border-2'>

                {props.todo}
                <button onClick={()=>{props.delTodo(props.i)}}>Delete</button>
            </li>
  )
}

export default React.memo(Todo)