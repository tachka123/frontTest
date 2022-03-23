import React from "react";
import { genderVals } from "../../redux/StateForms";
import PickContainer, { PickItemsContainer } from "../PickContainers";
import { Label } from "../RenderField";
import s from "./s.module.css";

const keysOfValues = Object.keys(genderVals);

const Gender = ({ setVal, active }) => {
  return (
    <PickContainer>
      <Label center label={"Gender"} />
      <PickItemsContainer>
        {keysOfValues.map((key) => (
          <Item
            active={key === active.value}
            setVal={setVal}
            value={key}
            key={key}
          />
        ))}
      </PickItemsContainer>
    </PickContainer>
  );
};

const Item = ({ value, setVal, active }) => (
  <button
    type="button"
    onClick={() => {
      setVal("gender", { value });
    }}
    className={[s.containerItem, active && s.active].join(" ")}
  >
    {genderVals[value]}
  </button>
);

export default Gender;
