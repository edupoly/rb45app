import './App.css'
import Counter from './Counter'
import Countries from './Countries'
function App() {

  return (
    <div className='border border-danger border-3 m-3 p-2'>
      <h1>Welcome to Edupoly React Application Development</h1>
      <Counter iv={10} s={2}></Counter>
      <Counter iv={20} s={5}></Counter>
      <Counter></Counter>
      {/* <Countries></Countries> */}
    </div>
  )
}

export default App
// useEffect() hooks
// useState()
// useCallback()
// hooks are basically functions
