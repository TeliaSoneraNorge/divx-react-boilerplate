FROM node:boron

# Install PM2 (production runtime) globally
RUN npm install pm2 -g

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN yarn

# Bundle app source
COPY . /usr/src/app
EXPOSE 3000
CMD ["pm2-docker", "index.js"]
