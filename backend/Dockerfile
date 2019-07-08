FROM node:8

ENV NODE_ENV=development

RUN mkdir /backend

WORKDIR /backend

COPY . /backend

RUN npm install

EXPOSE 3000

CMD npm start