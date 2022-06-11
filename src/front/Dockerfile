# base image
FROM node:14-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm -v
RUN npm install

# Bundle app source
COPY . .

EXPOSE 80

CMD [ "npm", "run", "serve"]