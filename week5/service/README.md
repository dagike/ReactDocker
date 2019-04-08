# API Service in Docker

## Docker

We start a mongodb server container

`docker run --name my-mongo -it -p 27017:27017 mongo:3.4.18-jessie`

## Dockerfile

We create the following container to use with mongo in a terminal within the Dockerfile directory

`docker build -t dagike/node-web-app .`

We can check if the image was created

`docker images`

Finally we start that container and connecting with the mongodb server we starter early

`docker run --link my-mongo:mongo -p 8080:8080 -d dagike/node-web-app`

## Using CURL we can test the API

`curl -X GET http://localhost:8080 -d '{"title":"God of War"}'`
