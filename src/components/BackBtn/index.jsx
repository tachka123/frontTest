import React from "react";
import s from "./s.module.css";

const BackButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.container}>
      Back
    </button>
  );
};

export default BackButton;
