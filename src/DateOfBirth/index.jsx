import React from "react";
import PickContainer, { PickItemsContainer } from "../PickContainers";
import { Label } from "../RenderField";
import s from "./s.module.css";

const DateOfBirth = () => {
  return (
    <PickContainer>
      <Label center label={"Date of birth"} />
      <PickItemsContainer>
        <Item placeholder={"DD"} />
        <Item />
        <Item placeholder={"YYYY"} />
      </PickItemsContainer>
    </PickContainer>
  );
};

const Item = ({ placeholder }) => (
  <input className={s.input} type={"number"} placeholder={placeholder} />
);

Item.defaultProps = { placeholder: "MM" };

export default DateOfBirth;
