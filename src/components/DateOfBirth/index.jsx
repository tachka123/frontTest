import React from "react";
import { labels, validate } from "../../utils";
import PickContainer, { PickItemsContainer } from "../PickContainers";
import { Label } from "../RenderField";
import s from "./s.module.css";

const firstFormTypes = {
  [labels.day]: { type: labels.day, label: "DD" },
  [labels.month]: { type: labels.month, label: "MM" },
  [labels.year]: { type: labels.year, label: "YYYY" },
};

const keys = Object.keys(firstFormTypes);

const DateOfBirth = ({ setVal, validateth, formValues }) => {
  return (
    <PickContainer>
      <Label
        error={!formValues[labels.isAdult].value && "You are under age!"}
        center
        label={"Date of birth"}
      />
      <PickItemsContainer>
        {keys.map((val) => {
          return (
            <Item
              key={val}
              error={formValues[val].error}
              placeholder={firstFormTypes[val].label}
              onChange={({ target: { value } }) => {
                setVal(val, {
                  value: value,
                  error: validate(val, value),
                });
              }}
            />
          );
        })}
      </PickItemsContainer>
    </PickContainer>
  );
};

const Item = ({ placeholder, onChange, error }) => {
  return (
    <input
      onChange={onChange}
      className={[s.input, error.length > 0 && s.err].join(" ")}
      type={"number"}
      placeholder={placeholder}
    />
  );
};

Item.defaultProps = { placeholder: "MM" };

export default DateOfBirth;
