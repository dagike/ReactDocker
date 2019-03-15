const MongoClient = require("mongodb").MongoClient;
const DBName = "games";

const url = `mongodb://10.0.75.1/${DBName}`;

const gameData = [
  {
    title: "God of War",
    genre: "Action",
    year: 2018,
    consoles: ["PS4"],
    developer: "SIE Santa Monica Studio"
  },
  {
    title: "Monster Hunter World",
    genre: "Action",
    year: 2018,
    consoles: ["PS4", "XB1", "PC"],
    developer: "Capcom"
  },
  {
    title: "Detriot: Become Human",
    genre: "Adventure",
    year: 2018,
    consoles: ["PS4"],
    developer: "Quantic Dream"
  },
  {
    title: "Sunset Overdrive",
    genre: "Adventure",
    year: 2018,
    consoles: ["XONE", "PC"],
    developer: "Insomniac Games"
  }
];

MongoClient.connect(url)
  .then(con => {
    console.log("Connected");
    return con
      .db("hobbies")
      .collection("games")
      .insert(gameData)
      .then(out => console.log(out))
      .then(() => con.close());
  })
  .catch(err => {
    console.log(err);
  });
