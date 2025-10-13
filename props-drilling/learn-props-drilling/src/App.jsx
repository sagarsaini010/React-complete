import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <>
     <div className="parent">
      <Card user='Alina' age={23} image="https://i.pinimg.com/1200x/f6/3d/d5/f63dd51ed2ce130e1ed3484c95ca8091.jpg"/>
      <Card user='Slira' age={24} image="https://i.pinimg.com/736x/da/06/15/da06151f3edfa05b2341aac0e53fb848.jpg"/>
     </div>
    </>
  )
}

export default App