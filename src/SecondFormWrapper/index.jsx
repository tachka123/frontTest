import React from "react";
import BackButton from "../BackBtn";
import DateOfBirth from "../DateOfBirth";
import Footer from "../Footer";
import Form from "../Form";
import Gender from "../Gender";
import NextButton from "../NextButton";
import ProgressBar from "../ProgressBar";
import WhereDidYouHear from "../WhereDidYouHear";

const SecondFormWrapper = () => {
  return (
    <Form>
      <ProgressBar percent={50} />
      <DateOfBirth />
      <Gender />
      <WhereDidYouHear />
      <Footer>
        <BackButton />
        <NextButton />
      </Footer>
    </Form>
  );
};

export default SecondFormWrapper;
