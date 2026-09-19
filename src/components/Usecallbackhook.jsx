import React, { useState, useCallback } from "react";
import Childcomponent from "./Childcomponent";

const Usecallbackhook = () => {
  console.log("Usecallbackhook render hua");
  const [count, setCount] = useState(0);
  const updatingcount = useCallback(function updateCount() {
    setCount(count + 1);
  }, []);

  return (
    <div>
      <button onClick={updatingcount}>press the count btn</button>
      {count}
      <Childcomponent buttonname="callbackbtn1" functioname={updatingcount} />
    </div>
  );
};

export default Usecallbackhook;
