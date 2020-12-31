import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

const bookList = [
  {
    title: "Ikigai: The Japanese secret to a long and happy life",
    author: "Héctor García",
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
  },
];

//Using map to return a list of books (JSX can render a list of objects)
function Greeting() {
  return (
    <section className="booklist">
      {bookList.map((book) => {
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

//Passing props as parametres
const Book = (props) => {
  //Props now contain book object in place of title, author and image
  const { img, title, author } = props.book;
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
