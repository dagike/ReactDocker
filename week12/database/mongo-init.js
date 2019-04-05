const gameData = [
  {
    title: "God of War",
    genre: "Action",
    year: 2018,
    consoles: ["PS4"],
    developer: "SIE Santa Monica Studio",
    cover:
      "https://static.giantbomb.com/uploads/scale_small/0/3699/3012241-god+of+war+%28ps4%29.jpg"
  },
  {
    title: "Monster Hunter World",
    genre: "Action",
    year: 2018,
    consoles: ["PS4", "XB1", "PC"],
    developer: "Capcom",
    cover:
      "https://static.giantbomb.com/uploads/scale_small/0/3699/2996112-monster+hunter+-+world+v1.jpg"
  },
  {
    title: "Detriot: Become Human",
    genre: "Adventure",
    year: 2018,
    consoles: ["PS4"],
    developer: "Quantic Dream",
    cover:
      "https://static.giantbomb.com/uploads/scale_small/8/87790/3022574-box_dbh.png"
  },
  {
    title: "Sunset Overdrive",
    genre: "Adventure",
    year: 2018,
    consoles: ["XONE", "PC"],
    developer: "Insomniac Games",
    cover:
      "https://static.giantbomb.com/uploads/scale_small/18/187968/2631498-3224852370-Sunse.jpg"
  },
  {
    title: "Warframe",
    genre: "Adventure",
    year: 2013,
    consoles: ["XONE", "PC", "PS4"],
    developer: "Digital Extremes",
    cover:
      "https://static.giantbomb.com/uploads/scale_small/8/87790/3026058-box_wf.png"
  }
];

db.games.insertMany(gameData);
