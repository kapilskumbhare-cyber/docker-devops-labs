# set base image 
FROM node:22-alpine

# set working directory
WORKDIR /app

# copy package 
COPY package*.json ./

#install dependency
RUN npm install

# copy file to current directory
COPY . .

#Expose port 
EXPOSE 3000

#default statement 
CMD ["npm", "start"]
