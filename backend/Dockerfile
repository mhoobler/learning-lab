FROM node:16.13-alpine

WORKDIR /backend

ENV PATH="./node_modules/.bin:$PATH"

COPY . .


RUN yarn
RUN tsc

EXPOSE 3000

CMD ["node", "./dist/index.js"]
