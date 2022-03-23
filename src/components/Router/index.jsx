import React from "react";
import { Switch, Route } from "react-router-dom";
import FirstFormWrapper from "../FirstFormWrapper";
import SecondFormWrapper from "../SecondFormWrapper";
import Successfull from "../Succesful";

export const AppRoutes = {
  home: "/",
  person: "/person",
  successful: "/successful",
};

const Router = (props) => {
  return (
    <Switch>
      <Route path={AppRoutes.person}>
        <SecondFormWrapper />
      </Route>
      <Route exact path={AppRoutes.home}>
        <FirstFormWrapper />
      </Route>
      <Route exact path={AppRoutes.successful}>
        <Successfull />
      </Route>
    </Switch>
  );
};

export default Router;
