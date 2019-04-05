FROM node:8

# Create app directory
WORKDIR /usr/src/app

ENV MONGO_INITDB_DATABASE hobbies

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 80

CMD [ "node", "index.js" ]