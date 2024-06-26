FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
COPY .env .env 
ENV PORT=3000
EXPOSE $PORT
CMD ["npm", "start"]
