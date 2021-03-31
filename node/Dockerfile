FROM node:12.18.1

WORKDIR /usr/src/app

COPY ./server/package*.json ./

RUN npm install

COPY . .

EXPOSE 3009
