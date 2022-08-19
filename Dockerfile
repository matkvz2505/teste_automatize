FROM node:latest

WORKDIR /src/index.ts

COPY . .

RUN npm i 

CMD [ "npm", "start" ]