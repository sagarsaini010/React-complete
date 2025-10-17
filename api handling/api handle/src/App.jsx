import React from 'react'

const App = () => {

const getData = async () =>{
  
const respons = await fetch('https://picsum.photos/v2/list')
const data = await respons.json()
 data.map((elem)=>{
     return console.log(elem.url)
 })

}
  return (
    <div>
      <button onClick={()=>{
        getData()
      }} >Get Data</button>
    </div>
  )
}

export default App