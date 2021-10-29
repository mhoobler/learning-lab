FROM node:16.13-alpine

WORKDIR /client

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

RUN yarn

CMD ["webpack"]
