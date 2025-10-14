import React from 'react'

const Card = (props) => {
  return (
     <div className="card">
        <div className="top">
          <div className="left">{props.status}</div>
          <div className="right">{props.rate}</div>
        </div>
        <div className="center">
          <div className="img-name">
            <img
              src={props.img}
              alt=""
            />
            <h1>{props.name}</h1>
            <p className="dese">{props.role}</p>
            <p className="quli">{props.tagline}</p>
          </div>
          <div className="skills">
            <p>{props.skills[0]}</p>
            <p>{props.skills[1]}</p>
            <p>{props.skills[2]}</p>
            <p className="num">{props.skills[3]}</p>
          </div>
          <div className="disc">
            <p>{props.description}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="btn">VIEW PROFILE</div>
        </div>
      </div>
  )
}

export default Card