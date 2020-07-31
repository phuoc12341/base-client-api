# build stage
FROM node:latest as build-stage
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run build

# production stage
FROM nginx:alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]