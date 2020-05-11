import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import QuestionnairePage from "./Pages/HomePage/QuestionnairePage/QuestionnairePage";
import AboutUsPage from "./Pages/AboutUs/AboutUs";
import ContactUsPage from "./Pages/ContactUs/ContactUs";
import LoginPage from "./Pages/LoginPage/LoginPage";

const MainRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route
          exact
          path="/questionnaire"
          component={QuestionnairePage}
        ></Route>
        <Route exact path="/aboutus" component={AboutUsPage}></Route>
        <Route exact path="/contactus" component={ContactUsPage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
      </Switch>
    </>
  );
};

export default MainRouter;
