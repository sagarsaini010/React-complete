import React from 'react'

const App = () => {

  // const user = {
  //   user:"Sagar Saini",
  //   age:29,
  //   email:"sagarsaini954818@gmail.com"
  // }
  // const obj = JSON.stringify(user)
  // localStorage.setItem('user',obj)
  const getData = localStorage.getItem('user')
  const data = JSON.parse(getData)

  console.log(data)


  
//  localStorage.setItem('user','Sagar Saini')
// const user = localStorage.getItem('user')

// localStorage.removeItem('user')

// console.log(user)

  return (
    <div>
      <h1>Hello Bhai</h1>
    </div>
  )
}

export default App