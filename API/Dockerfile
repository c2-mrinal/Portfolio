# Use an official Node.js runtime as the base image
FROM node:14 AS Production

# Set environment variable
ENV NODE_ENV=production

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory
COPY . .

# Expose the port for the Node.js app
EXPOSE 8080

# Start the Node.js app
CMD ["sh", "-c", "npm run start:production"]
