import React from "react";
import style from "./ErrorButton.module.css";

export const ErrorButton = (props) => {
  return (
    <button className={style.error}>
      An error has occured! {props.children[0]}
    </button>
  );
};
