from node:18
SHELL ["/bin/bash", "-c"]
WORKDIR /app
COPY ./package.json /app/package.json
RUN yarn install
ENTRYPOINT [ "./entrypoint.sh" ]
CMD [ "run" ]
