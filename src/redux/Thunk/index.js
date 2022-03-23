import { labels, underAgeValidate, validate } from "../../utils";
import { setValue } from "../StateForms";

export const validateThunk = (cbOnSuccess, ...args) => {
  return (d, s) => {
    const store = s();
    const errs = args
      .map((label) => {
        const validationRes = validate(
          label,
          store.formValues[label].value,
          store.formValues["password"].value
        );
        d(
          setValue(label, {
            error: validationRes,
            value: store.formValues[label].value,
          })
        );
        return validationRes;
      })
      .filter((err) => err !== "");
    if (errs.length === 0) {
      if (args.includes(labels.isAdult)) {
        const isUnderAge = underAgeValidate(
          `${store.formValues[labels.year].value}-${
            store.formValues[labels.month].value
          }-${store.formValues[labels.day].value}`
        );
        if (!isUnderAge) {
          return d(setValue(labels.isAdult, { value: isUnderAge }));
        }
      }

      cbOnSuccess();
    }
  };
};
