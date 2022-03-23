export const labels = {
  email: "email",
  password: "password",
  repeatePassword: "repeatePassword",
  day: "day",
  month: "month",
  year: "year",
  gender: "gender",
  whereHear: "whereHear",
  isAdult: "isAdult",
};

export const validate = (label, value, extraValue) => {
  const emptyValue = value === "";
  switch (label) {
    case labels.email:
      if (emptyValue) {
        return "Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return "Invalid email address";
      } else {
        return "";
      }
    case labels.password:
      if (emptyValue) {
        return "Password is required";
      } else if (value.length < 6) {
        return "Password is too short";
      } else {
        return "";
      }
    case labels.repeatePassword:
      if (value !== extraValue) {
        return "Password doesn`t match";
      } else {
        return "";
      }
    case labels.day: {
      if (emptyValue) {
        return "Required";
      } else if (
        value.length <= 1 ||
        Number(value) <= 0 ||
        Number(value) > 31
      ) {
        return "Incorrect";
      } else {
        return "";
      }
    }
    case labels.month: {
      if (emptyValue) {
        return "Required";
      } else if (
        value.length <= 1 ||
        Number(value) <= 0 ||
        Number(value) > 12
      ) {
        return "Incorrect";
      } else {
        return "";
      }
    }
    case labels.year: {
      if (emptyValue) {
        return "Required";
      } else if (value.length !== 4 || isNaN(Number(value))) {
        return "Incorrect";
      } else {
        return "";
      }
    }
    default:
      return "";
  }
};

export function underAgeValidate(birthday) {
  const optimizedBirthday = birthday.replace(/-/g, "/");
  const myBirthday = new Date(optimizedBirthday);
  const currentDate = new Date().toJSON().slice(0, 10) + " 01:00:00";
  const myAge = ~~((Date.now(currentDate) - myBirthday) / 31557600000);
  if (myAge < 18) {
    return false;
  } else {
    return true;
  }
}
