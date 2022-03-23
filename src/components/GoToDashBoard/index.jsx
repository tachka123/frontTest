import React from "react";
import s from "./s.module.css";

const GoToDashBoard = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={s.container}>
      Go to dashboard {"-->"}
    </button>
  );
};

export default GoToDashBoard;
