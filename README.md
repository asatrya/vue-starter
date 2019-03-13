# VueJS 2 Boilerplate

VueJS Boilerplate/Starter based on tutorial https://coursetro.com/courses/23/Vue-Tutorial-in-2018---Learn-Vue.js-by-Example

## How to Start

``` bash
# clone repo & get into the project directory
git clone https://github.com/asatrya/vue-starter
cd vue-starter

# build image
docker build --no-cache -t asatrya/vuejs-starter:latest .

# create environment file
cp .env-dist .env

# run container (for development)
docker-compose -f docker-compose.dev.yaml up -d

# run container (for production)
docker-compose -f docker-compose.yaml up -d
```

Now, you can access to http://localhost:8080 from your browser.

## Get into the container's bash

``` bash
docker exec -it vuejs_starter sh
```

## Build Setup

These scripts already run in Dockerfile. So that you don't have to run again. This is just for explanation for what's going on while building image and running container.

``` bash
# install vue-cli globally
npm install @vue/cli -g --unsafe-perm

# install webpack globally
npm install -g -D webpack-cli
npm install -g webpack-dev-server
npm link webpack

# install dependencies
npm install
npm install --dev

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Detailed Explanation

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
