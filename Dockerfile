FROM node:16-alpine

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install -g pnpm
RUN pnpm install
COPY . /app
RUN pnpm build

# Usuario de Next.js

EXPOSE 3000
CMD ["pnpm", "start"]
