import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(20)
  const btnClicked = () =>{
  // const newNum = [...num]
  // newNum.push(23)
  // setNum(newNum)
  setNum(prev => (prev+24))
  }
  // const [num, setNum] = useState({user:'Sagar',age:20})
  // const btnClicked = () =>{
  //   const newNum = {...num};
  //   newNum.user = 'Raman'
  //   newNum.age = 23
  //   setNum(newNum)
  // }
  return (
    <div>
      <h1> {num} </h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App