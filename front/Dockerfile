FROM node:slim

WORKDIR /src

COPY ./package.json ./package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:slim

WORKDIR /app

ENV NODE_ENV production

COPY --from=0 /src/node_modules .

COPY --from=0 /src/next.config.js/ .
COPY --from=0 /src/.next/static ./.next/static
COPY --from=0 /src/.next/standalone/ .

CMD ["node", "server.js"]


