# API

Using the api created in week6 we can start using it for the front end now we add a Dockerfile to simple create a container of this api

## MongoDB

We start mongodb docker container

`docker run --name my-mongo -it -p 27017:27017 mongo:3.4.18-jessie`

We populate some data with week5\backend\index.js

We build the image from the dockerfile

`docker build -t dagike/api .`

We can run this image using

`docker run -p 80:80 -d dagike/api`

Finally in the browser we can see the api running going to

`http://localhost/api/games/all`
