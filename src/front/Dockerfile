FROM node:lts-alpine as build-stage
WORKDIR /app
COPY   package*.json ./

RUN npm install
RUN npm install nodemon
COPY . .
RUN npm run build
ENV HOST=0.0.0.0

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]