import React from "react";
import "./GameCard.scss";

export default ({ game }) => {
  return (
    <div className="gameCard">
      <img
        className="gameCard__image"
        src={game.cover}
        alt={`${game.title} cover`}
      />
      <div className="gameCard__title">{game.title}</div>
    </div>
  );
};
