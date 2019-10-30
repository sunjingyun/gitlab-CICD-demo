FROM node:10-stretch

ENV CODE_DIR /code/

WORKDIR $CODE_DIR

EXPOSE 8080

COPY . $CODE_DIR

CMD ["node", "src/index.js"]