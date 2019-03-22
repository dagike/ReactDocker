import React from "react";
import Date from "./Date";

const Clock = props => {
  return (
    <div>
      <h1>The time is {props.time}</h1>
      <Date date={props.date} />
      <button className="btn btn-primary" onClick={props.action}>
        Stop/Start Time
      </button>
    </div>
  );
};

export default Clock;
