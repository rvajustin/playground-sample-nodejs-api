FROM node:current-alpine3.12

COPY . /app

WORKDIR /app

EXPOSE 8080

CMD ["server.js"]