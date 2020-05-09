import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";

const MainRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
      </Switch>
    </>
  );
};

export default MainRouter;