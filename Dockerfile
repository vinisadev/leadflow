FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN yarn

COPY . .
RUN yarn build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/package.json /app/package.json

RUN yarn --only=production

ENV NODE_ENV=production
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]