from node:18-alpine
WORKDIR /app
COPY ./package.json /app/package.json
RUN ls /app
RUN npm install
CMD [ "npm", "run", "dev" ]
