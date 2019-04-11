const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

//const DBName = process.env.NODE_ENV === "prod" ? "my-mongo" : "10.0.75.1";

const DBName = "hobbies";
const url = `mongodb://10.0.75.1/${DBName}`;

const options = {
  useNewUrlParser: true,
  reconnectTries: 60,
  reconnectInterval: 1000
};
const routes = require("./routes/routes.js");
const port = process.env.PORT || 80;
const app = express();
app.use(cors());
const http = require("http").Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);
app.use((req, res) => {
  res.status(404);
});

MongoClient.connect(url, options, (err, database) => {
  if (err) {
    console.log(`FATAL MONGODB CONNECTION ERROR: ${err}:${err.stack}`);
    process.exit(1);
  }
  app.locals.db = database.db("hobbies");
  http.listen(port, () => {
    console.log("CORS Enabled Listening on port " + port);
    app.emit("APP_STARTED");
  });
});

module.exports = app;
