FROM node:18 AS build
WORKDIR /app

COPY package-lock.json .
COPY package.json .
RUN npm install

COPY . .
RUN npm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/frontend/ /usr/share/nginx/html

EXPOSE 80
