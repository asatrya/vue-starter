FROM node:10.15-alpine

RUN apk update 
RUN apk add nano

WORKDIR /app
COPY . .

# install vue-cli globally
RUN npm install -g @vue/cli

# install dependencies
RUN yarn install

EXPOSE 8080

CMD ["yarn", "serve"]