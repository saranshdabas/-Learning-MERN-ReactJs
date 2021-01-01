import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

const bookList = [
  {
    id: 1,
    title: "Ikigai: The Japanese secret to a long and happy life",
    author: "Héctor García",
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 2,
    title: "The Alchemist",
    author: "Paulo Coelho",
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 3,
    title: "The Theory of Everything",
    author: "Stephen Hawking",
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/51oHUvYzbsL._AC_UL200_SR200,200_.jpg",
  },
];

//Using map to return a list of books (JSX can render a list of objects)
//Adding id as key prop in order for react to work with virtual dom as expected.
function Greeting() {
  //Using spread operator(...) to spread out(expose) object properties
  return (
    <section className="booklist">
      {bookList.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

//Events can be handled inline or externally usinf reference
//In case of reference and we want to pass an arugument we cannot use (), as it will be called on starting
//We will need to use arrow fn
const Book = (props) => {
  const { img, title, author } = props;
  const handleClickEvent = () => {
    console.log("Button was clicked");
  };
  const handleClickEventArgs = (author) => {
    console.log(`Button of ${author} was clicked`);
  };
  return (
    <article className="book">
      <img onClick={() => console.log("Image was clicked")} src={img} />
      <h5> {title} </h5>
      <h6
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author.toUpperCase()}
      </h6>
      <button onClick={handleClickEvent}>without arg</button>
      <button
        onClick={() => {
          handleClickEventArgs(author);
        }}
      >
        with arg
      </button>
    </article>
  );
};

ReactDom.render(<Greeting />, document.getElementById("root"));
