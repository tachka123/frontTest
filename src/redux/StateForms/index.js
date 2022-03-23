import { labels } from "../../utils";

const SET_VALUE_FIRST = "SET_VALUE_FIRST";

export const setValue = (label, changes) => {
  return {
    type: SET_VALUE_FIRST,
    label,
    changes,
  };
};

const initialInput = { value: "", error: "" };

export const whereHearUsValues = {
  default: "",
  link: "Linkedin",
  facebook: "facebook",
  robota: "robota.ua",
};

export const genderVals = {
  male: "male",
  female: "female",
  unspecifaied: "unspecifaied",
};

const initialState = {
  [labels.email]: initialInput,
  [labels.password]: initialInput,
  [labels.repeatePassword]: initialInput,
  [labels.day]: initialInput,
  [labels.month]: initialInput,
  [labels.year]: initialInput,
  [labels.gender]: { value: genderVals.female },
  [labels.howHearAboutUs]: { value: whereHearUsValues.default },
  [labels.isAdult]: { value: true },
};

export default function setValuesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VALUE_FIRST:
      return { ...state, [action.label]: { ...action.changes } };
    default:
      return state;
  }
}
