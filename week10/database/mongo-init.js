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

db.games.insertMany(gameData);
