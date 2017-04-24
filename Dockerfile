FROM node:6.10

RUN mkdir -p /usr/src/app/build
WORKDIR /usr/src/app
COPY ./build /usr/src/app/build

RUN npm install -g serve

CMD serve -s build