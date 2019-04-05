# API

## We need a docker container running with mongodb

`docker run --name my-mongo -it -p 27017:27017 mongo:3.4.18-jessie`

## We run the week5\backend\index.js using node to put some data to the mongodb

## After that we can do

`npm install`

Make sure in the index.js has the correct mongo url to run in your system

## Start the app

`node index.js`

## To test the api is running you should see in the terminal

`CORS Enabled Listening on port 80`

## If you go to the browser

`localhost/api/games/all`
