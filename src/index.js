import React from "react";
import ReactDom from "react-dom";

//JSX rules
// Always close all the tags even those who don't have one like img, input
// Use a () for return just to work with prettier else it will add ; after return
// Always return only a single element, if you have multiple enclose them in div or React.fragment
// Use camelCase for attributes like onClick in place of onclick
// Use className in place of class

function Greeting() {
  return <h1>Hi, Hello World!</h1>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));
