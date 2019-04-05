import React, { Component } from "react";
import GameCard from "./GameCard";
import "./GameList.scss";

class GameList extends Component {
  renderGameList() {
    const gameList = this.props.gameList.map(game => {
      return <GameCard key={game._id} game={game} />;
    });
    return gameList;
  }

  render() {
    return <div className="gameList">{this.renderGameList()}</div>;
  }
}

export default GameList;
