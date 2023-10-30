FROM node

WORKDIR /run-nodejs-dockerfile/src/app

COPY package*.json ./

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]