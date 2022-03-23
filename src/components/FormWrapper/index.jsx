import React from "react";
import s from "./s.module.css";

const FormWrapper = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

FormWrapper.defaultProps = { children: <></> };

export default FormWrapper;
