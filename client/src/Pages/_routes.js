import React from "react";
import Login from "../Component/Login/Login";
import Register from "../Component/Login/Register";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header_About from "../Component/AbouUs/Header_About";
import Footer_AboutUs from "../Component/AbouUs/Footer_AboutUs";
import Footer_news from "../Component/News/Footer_news";
import Header_news from "../Component/News/Header_news";
import Header_Support from "../Component/Support/Header_Support";
import Footer_Support from "../Component/Support/Footer_Support";
import Slideshow from "../Component/Home/Slideshow";
import Parameter from "../Component/Home/Parameter";
import Footer_Home from "../Component/Home/Footer_Home";
import Container_Home from "../Component/Home/Container_Home";
import Course from "../Component/Home/Course";
import Section from "../Component/Home/Section";
import Customer from "../Component/Home/Customer";

const Body = () => {
  return (
    <Switch>
      <Route path="/sign-in">
        <Login />
      </Route>
      <Route path="/sign-up">
        <Register />
      </Route>
      <Route path="/home">
        <Slideshow />
        <Parameter />
        <Container_Home />
        <Section />
        <Course />
        <Customer />
        <Footer_Home />
      </Route>
      <Route path="/about-us">
        <Header_About />
        <Footer_AboutUs />
      </Route>
      <Route path="/news">
        <Footer_news />
        <Header_news />
      </Route>
      <Route path="/support">
        <Footer_Support />
        <Header_Support />
      </Route>
    </Switch>
  );
};
export default Body;
