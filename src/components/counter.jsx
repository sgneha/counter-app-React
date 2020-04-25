// import React, { Component } from "react";
import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [imageURL, setImageURL] = useState("https://picsum.photos/200");

  return (
    //changed div to this  such to remoove extra div (can check in inspect).(div is child of object React we imported above)
    <div>
      <img src={imageURL} />
      <span>{format(count)}</span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
function format(count) {
  return count === 0 ? "Zero" : count;
}

export default Counter;
