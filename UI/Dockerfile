# Use an official Node.js runtime as the base image
FROM node:14 AS Production

# Set environment variable

# ENV PORT=3000
ENV NODE_ENV=production

# Set the working directory inside the container
WORKDIR /urs/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port for the React app
EXPOSE 3000

# Start the React app
CMD ["sh","-c","npm run start:production"]
