import React from "react";
import style from "./Section1.module.css";
import "remixicon/fonts/remixicon.css";
import Left from "./Left";
import Right from "./Right";
const Center = (props) => {
  return (
    <div className={style.center}>
      <Left/>
      <Right users = {props.users}/>
    </div>
  );
};

export default Center;
