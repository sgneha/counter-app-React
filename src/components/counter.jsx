// import React, { Component } from "react";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [tags, setTag] = useState([]);

  return (
    //changed div to this  such to remoove extra div (can check in inspect).(div is child of object React we imported above)
    <div>
      {tags.length === 0 && "please enter tags"}
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Counter;
