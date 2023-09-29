FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8004

CMD [ "npm", "start" ]

# docker build -t database .
# docker run -p 8004:8004 idatabase

# Whit NetWork
# docker run -dp 8004:8004 --network=star_wars --name=database database