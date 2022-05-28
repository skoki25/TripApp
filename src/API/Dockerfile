ARG NODE_IMAGE=node:14-alpine

FROM $NODE_IMAGE AS base
RUN apk --no-cache add dumb-init
RUN mkdir -p /home/skoky/Documents/Projects/App/src/hello-world/app && chown node:node /home/skoky/Documents/Projects/App/src/hello-world/app
WORKDIR /home/skoky/Documents/Projects/App/src/hello-world/app
USER node
RUN mkdir tmp

FROM base AS dependencies
COPY --chown=node:node ./package*.json ./
RUN npm ci
COPY --chown=node:node . .

COPY start.sh /home/skoky/Documents/Projects/App/src/hello-world/
FROM dependencies AS build
RUN node ace build --production

FROM base AS production
ENV NODE_ENV=production
ENV PORT=$PORT
ENV HOST=0.0.0.0
COPY --chown=node:node ./package*.json ./
RUN npm ci --production
COPY --chown=node:node --from=build /home/skoky/Documents/Projects/App/src/hello-world/ ./app
EXPOSE $PORT
CMD ["node","ace migration:run"]
CMD ["npm", "start"]

