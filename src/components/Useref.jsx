import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";

const Useref = () => {
  let divref = useRef();
  function chagethedivcolr() {}
  const [count, setcount] = useState(0);
  const value = useRef(0);
  function increment() {
    setcount(count + 1);
    value.current = value.current + 1;
    console.log(value);
  }
  // let value = 1;
  useEffect(() => {
    console.log("render again and again");
  });
  function chagethedivcolr() {
    divref.current.style.backgroundColor = "red";
  }

  return (
    <div ref={divref}>
      <button onClick={chagethedivcolr}>Click the btn</button>
      {count}
    </div>
  );
};

export default Useref;
//aik nomal varible k ander value dalo
//  gy to r ko increment kro gay to wo phr bhi zero ai gy chcek krty hain
