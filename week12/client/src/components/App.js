import React, { Component } from "react";
import DataLoader from "./DataLoader";
import { MemoryRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div>
        <MemoryRouter>
          <Header />
          <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/games" exact component={DataLoader} />
          </div>
        </MemoryRouter>
      </div>
    );
  }
}

export default App;
