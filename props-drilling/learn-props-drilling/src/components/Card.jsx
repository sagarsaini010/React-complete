import React from 'react'

const Card = (props) => {
    console.log(props.user,props.age)
  return (
    <div>
      <div className="card">
        <img src={props.image} alt="profile photo" />
        <h1>{props.user}, {props.age} </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eos sint ad odio, aliquid quo aspernatur alias.</p>
        <button>Follow</button>
      </div>
    </div>
  )
}

export default Card