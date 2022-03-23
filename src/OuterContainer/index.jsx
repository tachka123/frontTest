import React from "react";
import s from "./s.module.css";

const OuterContainer = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

OuterContainer.defaultProps = {
  children: <></>,
};

export default OuterContainer;
