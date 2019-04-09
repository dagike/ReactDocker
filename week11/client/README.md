# Client

Using the api created in week6 we can start using it for the front end now we add a Dockerfile to simple create a container of this api

## API

First we need to run the API to work correctly otherwise nothing is going to show only the react logo

We build the image from the dockerfile

`docker build -t dagike/client .`

We can run this image using

`docker run -p 3000:3000 -d dagike/client`

Finally in the browser we can see the front end running going to

`http://localhost:3000`
