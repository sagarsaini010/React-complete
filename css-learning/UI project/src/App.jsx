import React from 'react'
import "./App.css"
import Section2 from './components/section2/Section2'
import Section1 from './components/section1/Section1'
const App = () => {
  return (
    <>
    <div className='main'>
    <Section1 />
     <Section2 />
     </div>
    </>
  )
}

export default App