import React from "react";
import s from "./s.module.css";

export const Label = ({ error, label, center }) => (
  <label
    className={[s.label, error && s.error, center && s.labelCenter].join(" ")}
  >
    {error || label}
  </label>
);

const RenderField = ({ input, label, type, error, onChange, value }) => (
  <div className={s.container}>
    <Label error={error} label={label} />
    <input
      value={value}
      onChange={onChange}
      className={s.input}
      {...input}
      type={type}
    />
  </div>
);

RenderField.defaultProps = {
  input: {},
  label: "Label",
  type: "input",
  error: "",
  value: "",
};

export default RenderField;
