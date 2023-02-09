FROM node:18-alpine
WORKDIR /app
copy . .
RUN yarn install

CMD tail -f /dev/null

