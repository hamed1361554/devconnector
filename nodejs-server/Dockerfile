FROM node:10

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm i

COPY . /usr/src/app/

EXPOSE 5000

RUN npm i -g nodemon

#CMD ["npm", "start"]

CMD [ "npm", "run", "server" ]