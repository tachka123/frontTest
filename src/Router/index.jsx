import React from "react";
import { Routes, Route } from "react-router-dom";
import FirstFormWrapper from "../FirstFormWrapper";
import SecondFormWrapper from "../SecondFormWrapper";
import Successfull from "../Succesful";

export const AppRoutes = {
  home: "/",
  person: "/person",
  successful: "/successful",
};

const Router = () => {
  return (
    <Routes>
      <Route path={AppRoutes.person} element={<SecondFormWrapper />} />
      <Route exact path={AppRoutes.home} element={<FirstFormWrapper />} />
      <Route exact path={AppRoutes.successful} element={<Successfull />} />
    </Routes>
  );
};

export default Router;
