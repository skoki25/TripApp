FROM node:lts-alpine as build-stage
WORKDIR /front
COPY  /front/package.json .
COPY  /front/package-lock.json .

RUN npm install
COPY ./front .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /front/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]