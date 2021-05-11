import logo from "./logo.svg"
import "./App.css"

import React from "react"
import Home from "./components/Home"
import { BrowserRouter as Router, Route } from "react-router-dom"
import MyNav from "./components/MyNav"
import Footer from "./components/Footer"

class App extends React.Component {
  state = {}

  render() {
    return (
      <Router>
        <MyNav />
        <Route component={Home} path="/" />
        <Route component={Home} path="/user/:id" />
        <Footer />
      </Router>
    )
  }
}

export default App
