### Back End service

### Docker instructions

Start a MongoDB container with Docker

`docker run --name my-mongo -it -p 27017:27017 mongo:3.4.18-jessie`

### Dependencies

Install all the dependencies using the following command

`npm install`

### Running node app

We need the ip of the container docker either by running

`docker-machine env`

or using

`ipconfig`

Change the IP in the index.js to the docker container IP

After this edit we can run it with

`node index.js`
