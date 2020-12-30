import React from "react";
import ReactDom from "react-dom";

//Nested componenets
function Greeting() {
  return (
    <div>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
}

const Book = () => {
  return (
    <div>
      <Image />
      <Title />
      <Author />
    </div>
  );
};

//Implicit arrow fn return
const Image = () => (
  <img src="https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg" />
);

const Author = () => <h6>Héctor García</h6>;

const Title = () => (
  <h5>Ikigai: The Japanese secret to a long and happy life </h5>
);

ReactDom.render(<Greeting />, document.getElementById("root"));
