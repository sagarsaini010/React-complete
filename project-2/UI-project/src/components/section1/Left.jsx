import React from 'react'
import style from './Section1.module.css'
const Left = () => {
  return (
    <div className={style.left}>
        <div className={style.top}>
          <h1>
            Prospective <br /> customer <br /> segmentation
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
            veniam repudiandae similique praesentium, itaque dolor tenetur
            voluptate perferendis tempora officia incidunt? At sed ut ducimus!
          </p>
        </div>
        <div className={style.bottom}>
          <i className="ri-arrow-right-up-line"></i>
        </div>
      </div>
  )
}

export default Left