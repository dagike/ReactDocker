import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ClockController from "./components/ClockController";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ClockController />
        </header>
      </div>
    );
  }
}

export default App;
