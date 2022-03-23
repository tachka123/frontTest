import React from "react";
import { Route, Routes } from "react-router";
import { AppRoutes } from "../Router";
import s from "./s.module.css";

const Header = () => {
  return (
    <header className={s.container}>
      <Routes>
        <Route path={AppRoutes.home} element={"Signup"} />
        <Route path={AppRoutes.person} element={"Signup"} />
        <Route path={AppRoutes.successful} element={"Thank you"} />
      </Routes>
    </header>
  );
};

export default Header;
