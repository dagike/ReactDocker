# Docker

Start docker Docker Toolbox or Docker Desktop. We can use the following command to test if Docker is running and working correctly

`docker run hello-world`

## MongoDB

Once we have Docker ready and running we can download and run the image for MongoDB server

We use the docker run detached mode to run it in the background

`docker run --name my-mongo -d mongo:3.4.18-jessie`

Now we need the client running and using the server with just started making sure if you are running Windows you probably going to need `winpty` at the beginning of your command

`docker run -it --link my-mongo:mongo --rm mongo mongo --host mongo test`

Let's begin with creating a database

`use hobbies;`

Now we can insert in that database the following entry

```
db.games.insert(
  {
    title: "God of War",
    genre: "Action",
    year: 2018,
    consoles: ["PS4"],
    developer: "SIE Santa Monica Studio"
  }
)
```

We can see the new database and the other databases in the current server with this

`show dbs`

If we need to find any record with genre Action we do the following

`db.games.find({genre: "Action"})`

When we need to change something in the record we can update its content, with the first parameter begin the record we want to change and followed by the things you need to change

`db.games.update({title: "God of War"}, { $set:{publisher: "Sony Interactive Entertainment"}})`
