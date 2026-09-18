import React from "react";
import { useState, useMemo } from "react";
const Usememohook = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  function calculatedouble(input) {
    console.log("inside the expensicve function");
    for (let i = 0; i < 10000000; i++) {}
    return input * 2;
  }
  const result = useMemo(() => calculatedouble(input), [input]);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        INCREMENT COUNT
      </button>
      <input
        type="number"
        placeholder="enter num"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <br />
      {count}
      <br />

      {result}
    </div>
  );
};

export default Usememohook;
