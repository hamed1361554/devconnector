FROM node:10

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app/

RUN npm i

COPY . /app/

EXPOSE 4200 49153

CMD ["npm", "start"]
