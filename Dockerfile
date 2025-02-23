FROM node:20-alpine 

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

# Skip TypeScript checking and just build
RUN npm run build

# Expose both ports 80 and 3000
EXPOSE 80 5000

CMD ["npm", "run" , "dev"]