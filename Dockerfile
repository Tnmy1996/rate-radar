# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install pnpm and project dependencies
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy the current directory contents into the container
COPY . .

# Build the Next.js application
RUN pnpm run build

# Expose port 3000 for the Next.js application
EXPOSE 3000

# Run the Next.js application when the container launches
CMD ["pnpm", "run", "start"]