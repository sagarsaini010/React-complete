import React from 'react'
import style from './Section1.module.css'
import Container from './Container'
const Right = (props) => {
  
  return (
    <div className={style.right}>

   
    {
      props.users.map((elem,indx)=>{
        return <Container indx={indx} img={elem.img} tag={elem.tag} />
      })
    }
  

 

    </div>
  )
}

export default Right