import React from "react";

const Childcomponent = React.memo((props) => {
  console.log("hello");
  return (
    <div>
      <button>{props.buttonname}</button>
    </div>
  );
});

export default Childcomponent;
