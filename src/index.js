import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//Nested componenets
function Greeting() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

//Implicit arrow fn return
const Image = () => (
  <img src="https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg" />
);

const Author = () => (
  <h6 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Héctor García
  </h6>
);

const Title = () => (
  <h5>Ikigai: The Japanese secret to a long and happy life </h5>
);

ReactDom.render(<Greeting />, document.getElementById("root"));
