import Center from './Center'
import Navbar from './Navbar'
import style from './Section1.module.css'

const Section1 = (props) => {
  
  return (
    <>
    <div className={style.main}>
      <Navbar/>
      <Center users = {props.users}/>
      </div>
    </>
  )
}

export default Section1