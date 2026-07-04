FROM node:22-alpine AS base
WORKDIR /app

ENV VITE_BASE_URL_N8N=https://training.brice-herizo.cloud

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

RUN pnpm build

CMD ["pnpm", "run", "preview", "--host", "0.0.0.0", "--port", "5173"]

