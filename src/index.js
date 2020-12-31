import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

const book1 = {
  title: "Ikigai: The Japanese secret to a long and happy life",
  author: "Héctor García",
  img:
    "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
};
const book2 = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  img:
    "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
};

//Passing props values in JSX
function Greeting() {
  return (
    <section className="booklist">
      <Book img={book1.img} title={book1.title} author={book1.author} />
      <Book img={book2.img} title={book2.title} author={book2.author} />
    </section>
  );
}

//Passing props as parametres
const Book = ({ img, title, author }) => {
  //Equivalent to below code, destructing in the fn parametre itself
  //Props destructuring
  //const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} />
      <h5> {title} </h5>
      <h6
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author.toUpperCase()}
      </h6>
    </article>
  );
};

ReactDom.render(<Greeting />, document.getElementById("root"));
