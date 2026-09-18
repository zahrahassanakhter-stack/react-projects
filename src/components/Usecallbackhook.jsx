import React, { useState } from "react";
import Childcomponent from "./Childcomponent";

const Usecallbackhook = () => {
  console.log("Usecallbackhook render hua");
  const [count, setCount] = useState(0);
  function updateCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={updateCount}>press the count btn</button>
      {count}
      <Childcomponent buttonname="callbackbtn" />
    </div>
  );
};

export default Usecallbackhook;
