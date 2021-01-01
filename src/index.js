import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

import { bookList } from "./books";
import Book from "./Book";

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

ReactDom.render(<Greeting />, document.getElementById("root"));
