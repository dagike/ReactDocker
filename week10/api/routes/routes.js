const express = require("express");

const Document = require("../models/Game");
const router = express.Router();

router.get("/games/all", (req, res, next) => {
  req.app.locals.db
    .collection("games")
    .find({})
    .toArray((err, result) => {
      if (err) {
        res.status(400).send({ error: err });
      }
      if (result === undefined || result.length === 0) {
        res.status(400).send({ error: "No documents in database" });
      } else {
        res.status(200).send(result);
      }
    });
});

router.get("/games/:id", (req, res, next) => {
  req.app.locals.db.collection("games").findOne(
    {
      _id: req.params.id
    },
    (err, result) => {
      if (err) {
        res.status(400).send({ error: err });
      }
      if (result === undefined) {
        res
          .status(400)
          .send({ error: "No document matching that id was found" });
      } else {
        res.status(200).send(result);
      }
    }
  );
});

router.post("/games/new", (req, res, next) => {
  const newDocument = new Document(
    req.body.title,
    req.body.username,
    req.body.body
  );
  req.app.locals.db.collection("games").insertOne(
    {
      newDocument
    },
    (err, result) => {
      if (err) {
        res.status(400).send({ error: err });
      }
      res.status(200).send(result);
    }
  );
});

router.delete("/games/delete/:id", (req, res, next) => {
  req.app.locals.db.collection("games").deleteOne(
    {
      _id: req.params.id
    },
    (err, result) => {
      if (err) {
        res.status(400).send({ error: err });
      }
      res.status(200).send(result);
    }
  );
});

router.patch("/games/edit/:id", (req, res, next) => {
  req.app.locals.db.collection("games").updateOne(
    {
      _id: req.params.id
    },
    {
      $set: {
        title: req.body.title,
        username: req.body.username,
        body: req.body.body
      }
    },
    (err, result) => {
      if (err) {
        res.status(400).send({ error: err });
      }
      res.status(200).send(result);
    }
  );
});

module.exports = router;
