import React, { Component } from "react";

class DataLoader extends Component {
  state = { data: "Hello" };

  componentDidMount() {
    this.setState({ data: "Hi" });
  }

  render() {
    return <div>{this.state.data}</div>;
  }
}

export default DataLoader;
