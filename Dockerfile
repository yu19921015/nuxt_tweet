FROM node:8.15.1-alpine

WORKDIR /app

RUN apk update && \
    npm install -g npm && \
    npm install -g @vue/cli && \
    npm install -g create-nuxt-app

EXPOSE 3000

ENV HOST 0.0.0.0

CMD ["/bin/sh"]

