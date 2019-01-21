import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AppNavBar from "./components/layout/AppNavbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <AppNavBar />
            <div className="container">
              <h1>Hello</h1>
            </div>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
