import React, {useState} from 'react'

const App = () => {

  const [a, setA] = useState(0)
 
  return (<>
    <h1>Value of a is {a}</h1>
    <button onClick={()=>{setA(a+1)}}>Increse</button>
    <button onClick={()=>{setA(0)}}>Reset</button>
    <button onClick={()=>{setA(a-1)}}>Decrese</button>
    </>
  )
}

export default App