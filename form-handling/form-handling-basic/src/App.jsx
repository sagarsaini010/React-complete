import React, { useState } from 'react'

const App = () => {

const [title, setTitle] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log('Form submited by', title)
    setTitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input onChange={(e)=>{

          setTitle(e.target.value)
        }} type="text" placeholder='Enter your name' value={title} />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App