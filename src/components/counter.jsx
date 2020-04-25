// import React, { Component } from "react";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [imageURL, setImageURL] = useState("https://picsum.photos/200");
  const [tags, setTag] = useState(["tag1", "tag2"]);

  return (
    //changed div to this  such to remoove extra div (can check in inspect).(div is child of object React we imported above)
    <div>
      <img src={imageURL} />
      <span className={getBadgeclasses(count)}>{format(count)}</span>
      <button
        className="btn btn-secondry btn-sm"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};
function getBadgeclasses(count) {
  let classes = "badge m-2 badge-";
  classes += count === 0 ? "warning" : "primary";
  return classes;
}

function format(count) {
  return count === 0 ? "Zero" : count;
}

export default Counter;
