import React from "react";

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

//Default export, while importing name need not to match

export default Book;
