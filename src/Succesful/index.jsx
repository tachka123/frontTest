import React from "react";
import Form from "../Form";
import ProgressBar from "../ProgressBar";
import image from "./success.png";
import s from "./s.module.css";
import GoToDashBoard from "../GoToDashBoard";

const Successfull = () => {
  return (
    <Form>
      <ProgressBar percent={100} />
      <img className={s.image} src={image} alt="" />
      <GoToDashBoard />
    </Form>
  );
};

export default Successfull;
