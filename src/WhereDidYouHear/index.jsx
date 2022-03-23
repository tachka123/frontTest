import React from "react";
import PickContainer, { PickItemsContainer } from "../PickContainers";
import { Label } from "../RenderField";
import s from "./s.module.css";

const values = {
  link: "Linkedin",
  facebook: "facebook",
  robota: "robota.ua",
};

const keys = Object.keys(values);

const WhereDidYouHear = () => {
  return (
    <PickContainer>
      <Label center label={"Where did you hear about us"} />
      <select className={s.selectContainer}>
        {keys.map((value) => (
          <Item value={value} />
        ))}
      </select>
    </PickContainer>
  );
};

const Item = ({ value }) => <option value={value}>{values[value]}</option>;

export default WhereDidYouHear;
