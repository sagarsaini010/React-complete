import React from 'react'
import style from './Section1.module.css'
const Navbar = () => {
  return (
    <div>
        <header className={style.nav}>
        <div className={style.logo}>
        <p>TARGET AUDIENCE</p>
        </div>
        <div className={style.right}>
         <a href="#">DIGITAL BANKING PLATFORM</a>  
        </div>
      </header>
    </div>
  )
}

export default Navbar