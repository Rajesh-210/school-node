# Use official Node.js image as base
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package files first (for better build caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files (including routes, models, data)
COPY . .

# Copy requirements.txt (for reference/documentation)
# This doesn’t affect the install — just keeps it in the image
COPY requirements.txt /app/requirements.txt

# Expose the application port
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
