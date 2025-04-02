# Use the official Node.js image as the base image
FROM --platform=amd64 node:23

# Initialize working directory with proper rights
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Set the working directory
WORKDIR /home/node/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Start the application
CMD ["node", "server.js"]
