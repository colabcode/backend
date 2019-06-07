# ColabCode backend :rocket:

Source code of backednserver for **ColabCode** project.

## Purpose :tada:

ColabCode is a platform for code sharing in real time. The main usage scope is the technical interviews.

## Technologies :zap:

- Node.js v12
- Express.js
- PostgreSQL
- knex.js
- TypeScript
- socket.io
- GraphQL

## How to run :penguin:

First of all, packages:

```
npm i
```

After that make sure your env varirbles is okay. You can use `sample.env` to create new `.env` file, that would store your env variables.

For **prodction** run purposes you can just build and run compiled js::

```
npm run build
npm run start
```

For **developmet**:

```
npm run start:dev
```
