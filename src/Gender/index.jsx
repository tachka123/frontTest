import React from "react";
import PickContainer, { PickItemsContainer } from "../PickContainers";
import { Label } from "../RenderField";
import s from "./s.module.css";

const values = {
  m: "male",
  f: "female",
  u: "unspecified",
};

const keysOfValues = Object.keys(values);

const Gender = () => {
  return (
    <PickContainer>
      <Label center label={"Gender"} />
      <PickItemsContainer>
        {keysOfValues.map((key) => (
          <Item value={key} key={key} />
        ))}
      </PickItemsContainer>
    </PickContainer>
  );
};

const Item = ({ value }) => (
  <button className={s.containerItem}>{values[value]}</button>
);

export default Gender;
