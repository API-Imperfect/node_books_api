# Specify a base image
# from dockerhub
FROM node:14-alpine3.10


ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=admin123456

# all other commands will be executed relative to this directory
# our code will live here
WORKDIR /app

# A wildcard is used to ensure both package.json 
# AND package-lock.json are copied
COPY package*.json ./

# Install dependencies and clear npm cache
RUN npm install && npm cache clean --force

# If you are building your code for production
# RUN npm ci --only=production

# copy over all other files to container
COPY . .

# use EXPOSE command to have our port mapped by the docker deamon
EXPOSE 5000

# our default dev command
CMD ["npm","run","dev"]