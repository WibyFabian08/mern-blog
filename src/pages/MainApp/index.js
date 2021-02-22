import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";
import { Footer, Header } from "../../component/atoms";
import "./mainapp.scss";

const MainApp = () => {
  return (
    <div className="wrapper-mainapp">
      <Header></Header>
      <div className="main-wrapper">
        <Router>
          <Switch>
            <Route path="/create-blog">
              <CreateBlog></CreateBlog>
            </Route>
            <Route path="/detail-blog">
              <DetailBlog></DetailBlog>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainApp;
