FROM node:12-slim

WORKDIR /urs/app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm --verbose i

COPY . .

EXPOSE 8080

CMD npm run test && npm run build && cd dist && ls && npm run start