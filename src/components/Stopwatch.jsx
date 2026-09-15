import React from "react";
import { useState, useRef } from "react";

const stopwatch = () => {
  const [time, settime] = useState(0);
  const timer = useRef(null);
  function Starttimer() {
    timer.current = setInterval(() => {
      settime((time) => time + 1);
    }, 1000);
  }
  function stoptimer() {
    clearInterval(timer.current);
    timer.current = null;
  }
  function resettimer() {
    stoptimer();
    setTime(0);
  }

  return (
    <div>
      <h1>stopwatch:{time} second</h1>
      <button onClick={Starttimer}>Start</button>
      <button onClick={stoptimer}>Stop</button>
      <button onClick={resettimer}>reset</button>
    </div>
  );
};

export default stopwatch;
