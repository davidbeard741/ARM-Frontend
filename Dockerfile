FROM node:16 as dependencies
WORKDIR /app
COPY package.json  package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . ./
RUN npm run build
EXPOSE 80
CMD ["npm", "run", "start"]
