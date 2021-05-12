import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Feeds from "./components/Feeds";

class App extends React.Component {
  state = {};

  render() {
    return (
      <Router>
        <MyNav />
        <Route
          render={(routerProps) => <Feeds {...routerProps} />}
          path="/"
          exact
        />

        {/* <Route exact path="/">
          {<Redirect to="/me" />}
        </Route> */}
        <Route component={Home} path="/:id" />
        <Footer />
      </Router>
    );
  }
}

export default App;
