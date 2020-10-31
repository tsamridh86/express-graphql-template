FROM ubuntu:20.10
COPY package.json src /graphql-server/
RUN apt update && apt install -y nodejs npm && cd graphql-server && npm install
WORKDIR /graphql-server
EXPOSE 4000
CMD [ "npm", "run", "production" ]