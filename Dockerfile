FROM node:12.18-alpine3.9

RUN mkdir /app
WORKDIR /app

COPY package.json package.json \
     client/package.json client/package.json
RUN npm install \
    cd client/ \
    npm install \

COPY . .

LABEL maintainer="Ryuichi Miyazaki <rmiyazaki11@ucsbalum.com>"

CMD ./scripts/start.sh