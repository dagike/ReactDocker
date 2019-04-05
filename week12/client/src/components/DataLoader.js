import React, { Component } from "react";
import games from "../api/games";
import GameList from "./GameList";

class DataLoader extends Component {
  state = { data: "Hello", games: [] };

  gamesGetAll = async () => {
    const res = await games.get("/games/all");
    this.setState({ games: res.data, data: "Game List" });
  };

  componentDidMount() {
    this.gamesGetAll();
  }

  render() {
    return (
      <div>
        <div>{this.state.data}</div>
        <GameList gameList={this.state.games} />
      </div>
    );
  }
}

export default DataLoader;
