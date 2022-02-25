import React from "react";

function Cards({ name, id, email }) {
  return (
    <div className="tc dib bg-light-blue pa3 ma2 shadow-5 grow br3">
      <img src={`https://robohash.org/test${id}`} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Cards;
