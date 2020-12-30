import React from "react";
import ReactDom from "react-dom";

//Nested componenets
function Greeting() {
  return (
    <div>
      <Heading />
      <Message />
    </div>
  );
}

//Implicit arrow fn return
const Heading = () => <h1>Heading of the century</h1>;

//Explicit return
const Message = () => {
  return <h4>Hello world!</h4>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
