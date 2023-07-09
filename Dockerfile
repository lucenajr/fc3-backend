FROM node:20.3.1-slim

USER node

WORKDIR /home/node/app

RUN npm install -g npm@latest

CMD [ "sh","-c","npm install && tail -f /dev/null" ]
