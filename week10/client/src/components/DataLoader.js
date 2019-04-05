import React, { Component } from "react";
import games from "../api/games";

class DataLoader extends Component {
  state = { data: "Hello", games: [] };

  gamesGetAll = async () => {
    const res = await games.get("/games/all");
    this.setState({ games: res.data, data: "Game List" });
  };

  componentDidMount() {
    this.gamesGetAll();
  }

  renderGames() {
    const gameList = this.state.games.map(game => {
      return <div key={game._id}>{game.title}</div>;
    });
    return gameList;
  }

  render() {
    return (
      <div>
        <div>{this.state.data}</div>
        <div>{this.renderGames()}</div>
      </div>
    );
  }
}

export default DataLoader;
