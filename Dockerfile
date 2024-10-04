# Stage 2: Production Stage
FROM node:16-alpine AS production

WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the backend files (including models)
COPY backend ./backend

# Copy the frontend public directory
COPY frontend/public ./frontend/public

# Expose port 5000
EXPOSE 5000

# Start the server
CMD ["node", "backend/server.js"]
