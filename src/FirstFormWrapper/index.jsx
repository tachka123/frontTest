import React from "react";
import Footer from "../Footer";
import Form from "../Form";
import NextButton from "../NextButton";
import ProgressBar from "../ProgressBar";
import RenderField from "../RenderField";

import { validate } from "../utils";

const FirstFormWrapper = () => {
  return (
    <Form>
      <ProgressBar percent={20} />
      <RenderField type={"email"} label={"Email"} />
      <RenderField type={"password"} label={"Password"} />
      <RenderField type={"password"} label={"Confirm Password"} />
      <Footer>
        <NextButton />
      </Footer>
    </Form>
  );
};

export default FirstFormWrapper;
