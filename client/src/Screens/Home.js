import React from "react";
import Header from "../Component/Layout/header/index";
import Footer from "../Component/Layout/Footer/Footer";
import Body from "../Pages/_routes";
import { Route, Switch } from "react-router-dom";
import RoutesStudent from "../Pages/_routesStudent";
import RoutesTeacher from "../Pages/_routesTeacher";
import NotFound from "../Component/Layout/NotFound/NotFound";
import Footer_Home from "../Component/Home/Footer_Home"
import Footer_AboutUs from "../Component/AbouUs/Footer_AboutUs";
import Footer_Support from "../Component/Support/Footer_Support";
import Footer_news from "../Component/News/Footer_news";

const Home = () => {
  return (
    <>
      <Switch>
        <Route path="/home">
          <Header />
          <Body />
          <Footer_Home/>
          <Footer />
        </Route>
        <Route path="/sign-in">
          <Body />
        </Route>
        <Route path="/sign-up">
          <Body />
        </Route>
        <Route path="/student-workspace">
          <RoutesStudent />
        </Route>
        <Route path="/teacher-workspace">
          <RoutesTeacher />
        </Route>
        <Route path="/notfound">
          <NotFound />
        </Route>
        <Route path="/about-us">
          <Header />
          <Body />
          <Footer_AboutUs />
        </Route>
        <Route path="/news">
          <Header />
          <Body />
          <Footer_news/>
          <Footer />
        </Route>
        <Route path="/support">
          <Header />
          <Body />
          <Footer_Support/>
          <Footer />
        </Route>
      </Switch>
    </>
  );
};
export default Home;
