ARG NODE_IMAGE=node:14-alpine

FROM $NODE_IMAGE AS base
RUN apk --no-cache add dumb-init bash
RUN mkdir -p /home/skoky/Documents/Projects/TripApp/TripApp/src/API/app && chown node:node /home/skoky/Documents/Projects/TripApp/TripApp/src/API/app
WORKDIR /home/skoky/Documents/Projects/TripApp/TripApp/src/API/app
USER node
RUN mkdir tmp

FROM base AS dependencies
COPY --chown=node:node ./package*.json ./
RUN npm ci
COPY --chown=node:node . .

FROM dependencies AS build
RUN node ace build --production --ignore-ts-errors
FROM base AS production
ENV NODE_ENV=production
ENV PORT=$PORT
ENV HOST=0.0.0.0
COPY --chown=node:node ./package*.json ./
RUN npm ci --production
COPY --chown=node:node --from=build /home/skoky/Documents/Projects/TripApp/TripApp/src/API/ ./app
EXPOSE $PORT
CMD ["npm", "start"]

