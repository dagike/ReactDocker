# Micro service with callbacks

## Docker

### We start a mongodb container

`docker run --name my-mongo -it -p 27017:27017 mongo:3.4.18-jessie`

### Using ipconfig or docker-machine env we can find the ip for the container

### Modify the const url in

- sampledata.js
- index.js

## Node

### We need to install the modules using npm

`npm install`

### We can populate the container with the following command

`node sampledata.js`

### Build the the application to be able to run it

`npm run build`

### Now we can run the microservice

`npm start`

## Testing micro service

Using the follwing command we can get one of the records in the database

`curl -X GET http://localhost:3000 -d '{"title":"God of War"}'`
