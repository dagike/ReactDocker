// node application

const MongoClient = require("mongodb").MongoClient;
const DBName = "hobbies";

const url = `mongodb://10.0.75.1/${DBName}`;

MongoClient.connect(url, (err, client) => {
  if (!err) {
    console.log("Connected successfully to server");

    const db = client.db(DBName);
    findGame(db, result => {
      console.log(result);
    });
    client.close();
  } else {
    console.log(err);
  }
});

const findGame = (db, callback) => {
  // Get the documents collection
  const collection = db.collection("games");
  // Find some documents
  collection.find({}).toArray((err, docs) => {
    if (!err) {
      console.log("Found the following records");
      console.log(docs);
      callback(docs);
    } else {
      callback(err);
    }
  });
};
