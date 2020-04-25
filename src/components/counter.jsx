// import React, { Component } from "react";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [tags, setTag] = useState(["tag1", "tag2"]);

  return (
    //changed div to this  such to remoove extra div (can check in inspect).(div is child of object React we imported above)
    <div>{Tag(tags)}</div>
  );
};
function Tag(tags) {
  if (tags.length === 0) return <p>There are no tags</p>;
  return (
    <ul>
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

export default Counter;
