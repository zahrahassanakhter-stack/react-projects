import React from "react";

const Childcomponent = React.memo((props) => {
  console.log("child commponent reder hua");
  return (
    <div>
      <button onClick={props.functionname}>{props.buttonname}</button>
    </div>
  );
});

export default Childcomponent;
