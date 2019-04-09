import React from "react";

export default ({ time, action, buttonTitle }) => {
  return (
    <div>
      <h2>The time is {time}</h2>
      <button className="btn btn-primary" onClick={action}>
        {buttonTitle}
      </button>
    </div>
  );
};
