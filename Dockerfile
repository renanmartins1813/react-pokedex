FROM node:16-slim

WORKDIR /pokedex/

COPY . /pokedex/
RUN npm i

EXPOSE 5173
CMD npm run dev
