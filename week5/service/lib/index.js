import request from "request-promise";
import MongoClient from "mongodb";
import micro, { json, send, sendError } from "micro";

const DBName = "games";
const url = `mongodb://10.0.75.1:27017/${DBName}`;

async function connector() {
  try {
    // Use connect method to connect to the Server
    return await await MongoClient.connect(url);
  } catch (err) {
    console.log(err.stack);
  }
}

async function findGame(db, query) {
  try {
    let r = await db
      .collection("games")
      .find(query)
      .toArray();
    console.log(r);
    return r;
  } catch (err) {
    return err;
  }
}
async function updateGameByTitle(db, query) {
  const { title } = query;
  try {
    return await db
      .collection("games")
      .update({ title }, { $set: query })
      .toArray();
  } catch (err) {
    return err;
  }
}
async function insertGame(db, query) {
  console.log("inserting a game");
  try {
    return await db.collection("games").insert(query);
  } catch (err) {
    return err;
  }
}
async function deleteGameByTitle(db, query) {
  const { title } = query;
  try {
    return await db.collection("games").remove({ title });
  } catch (err) {
    return err;
  }
}

async function getHandler(request) {
  const js = await json(request);
  console.log(js);
  const client = await connector();
  const db = client.db(DBName);
  return await findGame(db, js);
}
async function postHandler(request) {
  const js = await json(request);
  console.log(js);
  const client = await connector();
  const db = client.db(DBName);
  return await insertGame(db, js);
}
async function putHandler(request) {
  const js = await json(request);
  const client = await connector();
  const db = client.db(DBName);
  return await updateGameByTitle(db, js);
}
async function deleteHandler(request) {
  const js = await json(request);
  const client = await connector();
  const db = client.db(DBName);
  return await deleteGameByTitle(db, js);
}

export default async (request, response) => {
  try {
    switch (request.method) {
      case "GET":
        console.log("a get call was made");
        return await getHandler(request);
      case "POST":
        console.log("a post call was made");
        return await postHandler(request);
      case "PUT":
        console.log("a put call was made");
        return await putHandler(request);
      case "DELETE":
        console.log("a delete call was made");
        return await deleteHandler(request);
      default:
        send(response, 405, "Invalid");
        break;
    }
  } catch (error) {
    throw error;
  }
};
