import React from "react";
import "./count.css";
import { useState } from "react";

const Count = () => {
  const [Count, setCount] = useState(0);
  return (
    <div className="Counterapp">
      <p id="clickdescription">You have click {Count} time</p>
      <button
        onClick={() => {
          setCount(Count + 1);
        }}
        className="clickmebtn"
      >
        Click me
      </button>
    </div>
  );
};
export default Count;
