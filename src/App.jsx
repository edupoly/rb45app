import './App.css'
import Todolist from './Todolist'
function App() {

  return (
   <div className='border border-2 border-danger p-3 m-3'>
    <h1>Welcome to Edupoly React Application Development</h1>
    <Todolist listname="veggies"></Todolist>

    
    {/* <Todolist listname="loans"></Todolist> */}
   </div>
  )
}

export default App
// reusability<==
// refactoring