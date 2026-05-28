
FROM node:18-alpine3.15
WORKDIR /usr/src/app
ENV PATH="./node_modules/.bin:$PATH"


COPY package.json .
RUN npm install --legacy-peer-deps

ENV PORT=3000
EXPOSE $PORT
