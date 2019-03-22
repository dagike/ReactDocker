import React, { Component } from "react";
import Clock from "./Clock";

class ClockController extends Component {
  tick = () => {
    this.setState({
      currentTime: new Date().toLocaleTimeString(),
      currentDate: new Date().toLocaleDateString(),
      run: true
    });
  };

  stopTime = () => {
    this.state.run
      ? clearInterval(this.timerID)
      : (this.timerID = setInterval(this.tick, 1000));
    this.setState({ run: !this.state.run });
  };

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }

  state = { currentTime: new Date().toLocaleTimeString() };
  render() {
    return (
      <Clock
        time={this.state.currentTime}
        action={this.stopTime}
        date={this.state.currentDate}
      />
    );
  }
}

export default ClockController;
