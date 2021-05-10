import logo from "./logo.svg";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyNav from "./components/MyNav.jsx";
import Footer from "./components/Footer.jsx";

class App extends React.Component {
  state = {};

  render() {
    return (
      <Router>
        <MyNav />
        <Route component={Home} path="/" />
        <Footer />
      </Router>
    );
  }
}

export default App;
