# STAGE 1 - BUILD
FROM node:lts-alpine as BUILDER
LABEL maintainer="Django Cass <dj.cass44@gmail.com>"

# disable spammy donation messages
ENV DISABLE_OPENCOLLECTIVE=true

WORKDIR /app

COPY package*.json ./
RUN npm install --quiet > /dev/null

COPY ./public ./public
COPY ./src ./src
COPY ./tsconfig.json .

RUN npm run build > /dev/null

# STAGE 2 - RUN
FROM nginx:stable-alpine
LABEL maintainer="Django Cass <dj.cass44@gmail.com>"

RUN mkdir -p /var/log/nginx && mkdir -p /var/www/html

RUN apk upgrade --no-cache -q

COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=BUILDER /app/build /var/www/html

# set permissions so that we can run without root
RUN touch /tmp/nginx.pid && \
  chown -R nginx:nginx /tmp/nginx.pid && \
  chown -R nginx:nginx /var/cache/nginx && \
  chown -R nginx:nginx /var/www/html

# drop to non-root user
USER nginx

EXPOSE 8080
# start NGINX
CMD ["nginx", "-g", "daemon off;"]