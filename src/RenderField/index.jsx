import React from "react";
import s from "./s.module.css";

export const Label = ({ error, label, center }) => (
  <label
    className={[s.label, error && s.error, center && s.labelCenter].join(" ")}
  >
    {error || label}
  </label>
);

const RenderField = ({ input, label, type, meta: { error } }) => (
  <div className={s.container}>
    <Label error={error} label={label} />
    <input className={s.input} {...input} type={type} />
    {error && <span>{error}</span>}
  </div>
);

RenderField.defaultProps = {
  input: {},
  label: "Label",
  type: "input",
  meta: { error: "" },
};

export default RenderField;
