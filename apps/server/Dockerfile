FROM node:20-alpine

WORKDIR /app

# Copy package files for dependency installation
COPY package.json package-lock.json ./
COPY packages/shared/package.json ./packages/shared/
COPY apps/server/package.json ./apps/server/

# Install dependencies
RUN npm ci --workspace=packages/shared --workspace=apps/server

# Copy source files
COPY packages/shared/ ./packages/shared/
COPY apps/server/ ./apps/server/

# Build shared package then server
RUN npm run build --workspace=packages/shared
RUN npm run build --workspace=apps/server

# Create data directory for SQLite
RUN mkdir -p /app/data

EXPOSE 3007

CMD ["node", "apps/server/dist/index.js"]
