FROM node:20-bullseye

RUN apt-get update && apt-get install -y python3 g++ make && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (for better caching)
COPY package.json package-lock.json turbo.json ./

COPY apps ./apps
COPY packages ./packages

RUN npm install

RUN npm run db:generate

RUN npm run build

CMD ["npm", "run", "start-user-app"]