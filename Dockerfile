FROM node:26.13.1@sha256:f8e5d4bb28fa55c74f1345166a082a10b7c68f22304350c1ce0d18358ae94996

WORKDIR /app

COPY package.json package-lock.json ./
COPY tsconfig.json ./
COPY src ./src

RUN npm ci && npm run build

ENV NODE_ENV=production

EXPOSE 3000
CMD ["node", "dist/app.js"]
