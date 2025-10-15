import React from 'react'
import style from './Section1.module.css'
const Container = (props) => {
  return (
    <div className={style.card}>
      <img src={props.img} alt="" />
      <div className={style.cardup}>
        <div className={style.num}>
          <p>{props.indx + 1}</p>
        </div>
        <div className={style.bottom}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel omnis nisi quasi! Lorem ipsum, </p>

        <div className={style.btn}>
          <a href="#">{props.tag}</a><a href="#"><i className="ri-arrow-right-line"></i></a>
        </div>

        </div>

      </div>
    </div>
  )
}

export default Container