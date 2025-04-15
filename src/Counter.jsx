import React, { useEffect } from 'react'

function Counter({iv=0,s=1}){
    var [c,setC] = React.useState(iv);
    function inc(){
      setC(c+s)
    }
    function dec(){
      setC(c-s);
    }
    useEffect(()=>{
        console.log("Counter Component Mounted");
        document.title=c;
    },[])
    useEffect(()=>{
        console.log("Counter Component Updated");
        document.title=c
    })
    return (
      <div className='border border-success border-3 m-3 p-2'>
        <h1>Counter:{c}</h1>
        <button onClick={()=>{inc()}}>Increment</button>
        <button onClick={()=>{dec()}}>Decrement</button>
      </div>
    )

}

export default Counter