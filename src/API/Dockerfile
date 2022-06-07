ARG NODE_IMAGE=node:18-alpine

FROM $NODE_IMAGE AS base
RUN apk --no-cache add dumb-init bash
RUN mkdir -p /home/skoky/Documents/Projects/App/src/TripApp/TripApp/API/app && chown node:node /home/skoky/Documents/Projects/App/src/TripApp/TripApp/API/app

WORKDIR /home/skoky/Documents/Projects/App/src/TripApp/TripApp/API/app
USER node
RUN mkdir tmp

FROM base AS dependencies
COPY --chown=node:node ./package*.json ./
COPY .adonisrc.json ./
RUN npm ci
COPY --chown=node:node . .

FROM dependencies AS build
RUN node ace build --production --ignore-ts-errors

ENV NODE_ENV=production
ENV PORT=$PORT
ENV HOST=0.0.0.0

EXPOSE $PORT
CMD ["node","ace migration:run"]
CMD ["npm", "start"]

