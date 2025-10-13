import React from 'react'

const card = () => {
  const user = 'Sagar Saini'
  const age = 23
  return (
    <div>
      <div className="card">
        <h1>Hello I am {user}</h1>
        <h3>My age is {age} </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veritatis sint tenetur beatae. Nemo eum totam cum eaque asperiores, facere beatae explicabo cumque.</p>
      </div>
    </div>
  )
}

export default card