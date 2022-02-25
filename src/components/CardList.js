import React from "react";
import Cards from "./Cards";

function CardList({ robots }) {
  const cardsArray = robots.map((user, i) => {
    return (
      <Cards
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <div>{cardsArray}</div>;
}

export default CardList;
