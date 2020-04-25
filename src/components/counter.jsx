// import React, { Component } from "react";
import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    //changed div to this  such to remoove extra div (can check in inspect).(React.Fragment is child of object React we imported above)
    <React.Fragment>
      <span>{count === 0 ? "Zero" : count}</span>
      <button OnClick={() => setCount(count + 1)}>Increment</button>
    </React.Fragment>
  );
};

export default Counter;
