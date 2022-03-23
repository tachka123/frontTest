import React from "react";
import { whereHearUsValues } from "../../redux/StateForms";
import { labels } from "../../utils";
import PickContainer from "../PickContainers";
import { Label } from "../RenderField";
import s from "./s.module.css";

const keys = Object.keys(whereHearUsValues);

const WhereDidYouHear = ({ setVal, whereHear }) => {
  return (
    <PickContainer>
      <Label center label={"Where did you hear about us"} />
      <select
        onChange={({ target: { value } }) => {
          setVal(labels.whereHear, { value });
        }}
        value={whereHear}
        className={s.selectContainer}
      >
        {keys.map((value) => (
          <Item value={value} />
        ))}
      </select>
    </PickContainer>
  );
};

const Item = ({ value }) => (
  <option value={value}>{whereHearUsValues[value]}</option>
);

WhereDidYouHear.defaultProps = { whereHear: null };

export default WhereDidYouHear;
