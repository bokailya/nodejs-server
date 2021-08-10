FROM node:12

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY src/ ./

ENV PORT 3000

CMD [ "npm", "start" ]
