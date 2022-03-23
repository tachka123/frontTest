import React, { useCallback } from "react";
import { connect } from "react-redux";

import Footer from "../Footer";
import Form from "../Form";
import NextButton from "../NextButton";
import ProgressBar from "../ProgressBar";
import RenderField from "../RenderField";
import { labels, validate } from "../../utils";
import { setValue } from "../../redux/StateForms";
import { withRouter } from "react-router-dom";
import { AppRoutes } from "../Router";
import { validateThunk } from "../../redux/Thunk";

const firstFormTypes = {
  email: { type: labels.email, label: "Email", htmlType: "email" },
  password: { type: labels.password, label: "Password", htmlType: "password" },
  repeatePassword: {
    type: labels.repeatePassword,
    label: "Repeate password",
    htmlType: "password",
  },
};

const keys = Object.keys(firstFormTypes);

const FirstFormWrapper = ({ setVal, formValues, history, validateth }) => {
  const cb = useCallback(() => {
    validateth(
      () => history.push(AppRoutes.person),
      labels.email,
      labels.password,
      labels.repeatePassword
    );
  }, []);

  return (
    <Form onSubmit={cb}>
      <ProgressBar percent={20} />
      {keys.map((val) => (
        <RenderField
          value={formValues[val].value}
          onChange={({ target: { value } }) => {
            setVal(val, {
              value: value,
              error: validate(val, value, formValues[labels.password].value),
            });
          }}
          key={val}
          type={firstFormTypes[val].htmlType}
          label={firstFormTypes[val].label}
          error={formValues[val].error}
        />
      ))}
      <Footer>
        <NextButton />
      </Footer>
    </Form>
  );
};

const connector = connect((state) => state, {
  setVal: setValue,
  validateth: validateThunk,
});

export default withRouter(connector(FirstFormWrapper));
