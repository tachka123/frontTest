import React from "react";
import { connect } from "react-redux";
import Form from "../Form";
import ProgressBar from "../ProgressBar";
import image from "./success.png";
import s from "./s.module.css";
import GoToDashBoard from "../GoToDashBoard";

const Successfull = ({ formValues }) => {
  return (
    <Form>
      <ProgressBar percent={100} />
      <img className={s.image} src={image} alt="" />
      <GoToDashBoard
        onClick={() => {
          const keys = Object.keys(formValues);
          const data = {};
          keys.forEach((k) => {
            data[k] = formValues[k].value;
          });
          console.log(data);
        }}
      />
    </Form>
  );
};

const connector = connect((state) => state, {});

export default connector(Successfull);
