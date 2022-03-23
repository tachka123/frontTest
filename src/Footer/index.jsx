import React from "react";
import s from "./s.module.css";

const Footer = ({ children }) => {
  return <footer className={s.container}> {children}</footer>;
};

Footer.defaultProps = {
  children: <> </>,
};

export default Footer;
