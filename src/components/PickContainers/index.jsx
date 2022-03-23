import React from "react";
import s from "./s.module.css";

const PickContainer = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export const PickItemsContainer = ({ children }) => {
  return <div className={s.containerInputs}>{children}</div>;
};

export default PickContainer;
