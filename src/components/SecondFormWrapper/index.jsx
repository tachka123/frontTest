import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setValue, whereHearUsValues } from "../../redux/StateForms";
import { validateThunk } from "../../redux/Thunk";
import { labels } from "../../utils";
import BackButton from "../BackBtn";
import DateOfBirth from "../DateOfBirth";
import Footer from "../Footer";
import Form from "../Form";
import Gender from "../Gender";
import NextButton from "../NextButton";
import ProgressBar from "../ProgressBar";
import { AppRoutes } from "../Router";
import WhereDidYouHear from "../WhereDidYouHear";

const SecondFormWrapper = ({ validateth, setVal, formValues, history }) => {
  return (
    <Form
      onSubmit={() => {
        validateth(
          () => history.push(AppRoutes.successful),
          labels.day,
          labels.month,
          labels.year,
          labels.isAdult
        );
      }}
    >
      <ProgressBar percent={50} />
      <DateOfBirth
        formValues={formValues}
        validateth={validateth}
        setVal={setVal}
      />
      <Gender active={formValues.gender} setVal={setVal} />
      <WhereDidYouHear
        setVal={setVal}
        whereHear={
          formValues[labels.whereHear]
            ? formValues[labels.whereHear].value
            : whereHearUsValues.default
        }
      />
      <Footer>
        <BackButton onClick={() => history.goBack()} />
        <NextButton />
      </Footer>
    </Form>
  );
};

const connector = connect((state) => state, {
  setVal: setValue,
  validateth: validateThunk,
});

export default withRouter(connector(SecondFormWrapper));
