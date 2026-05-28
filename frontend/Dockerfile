
FROM node:18-alpine3.15
WORKDIR /usr/src/app
ENV PATH="./node_modules/.bin:$PATH"


COPY package.json .
RUN npm install

RUN echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf && sysctl -p

ENV PORT=3000
EXPOSE $PORT