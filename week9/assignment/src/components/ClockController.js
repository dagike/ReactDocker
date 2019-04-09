import React, { Component } from "react";
import Clock from "./Clock";
import DateComp from "./DateComp";
class ClockController extends Component {
  state = {
    currentTime: new Date().toLocaleTimeString(),
    currentDate: new Date().toLocaleDateString(),
    isRunning: true
  };

  tick = () => {
    this.setState({
      currentTime: new Date().toLocaleTimeString(),
      currentDate: new Date().toLocaleDateString(),
      isRunning: true
    });
  };

  changeIntervalTime = () => {
    this.state.isRunning
      ? clearInterval(this.timerID)
      : (this.timerID = setInterval(this.tick, 1000));
    this.setState({ isRunning: !this.state.isRunning });
  };

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }

  render() {
    return (
      <div>
        <DateComp date={this.state.currentDate} />
        <Clock
          buttonTitle={this.state.isRunning ? "Stop Time" : "Start Time"}
          time={this.state.currentTime}
          action={this.changeIntervalTime}
        />
      </div>
    );
  }
}

export default ClockController;
