import React from "react";
import { Route, Switch } from "react-router";
import { AppRoutes } from "../Router";
import s from "./s.module.css";

const Header = () => {
  return (
    <header className={s.container}>
      <Switch>
        <Route path={AppRoutes.home}>{"Signup"} </Route>
        <Route path={AppRoutes.person}>{"Signup"}</Route>
        <Route path={AppRoutes.successful}>Thank you</Route>
      </Switch>
    </header>
  );
};

export default Header;
