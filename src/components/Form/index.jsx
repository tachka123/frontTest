import React from "react";
import s from "./s.module.css";

const Form = ({ children, onSubmit }) => {
  return (
    <form
      className={s.container}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
};

Form.defaultProps = {
  children: <></>,
  onSubmit: () => {
    console.log("Empty func");
  },
};

export default Form;
