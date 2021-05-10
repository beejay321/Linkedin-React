import logo from "./logo.svg"
import "./App.css"
import React from "react"
import Home from "./components/Home"
import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends React.Component {
  state = {}

  render() {
    return (
      <Router>
        <Route component={Home} path="/" />
      </Router>
    )
  }
}

export default App
