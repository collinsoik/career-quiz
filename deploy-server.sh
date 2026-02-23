#!/bin/bash
set -e

echo "=== Deploying Pathfinder Server ==="

# Build and start with Docker Compose
echo "Building Docker image..."
docker compose build

echo "Starting container..."
docker compose up -d

# Wait for health check
echo "Waiting for server to be healthy..."
for i in {1..15}; do
  if curl -s http://localhost:3007/health | grep -q '"status":"ok"'; then
    echo "Server is healthy!"
    curl -s http://localhost:3007/health | python3 -m json.tool 2>/dev/null || curl -s http://localhost:3007/health
    echo ""
    echo "=== Deployment complete ==="
    exit 0
  fi
  echo "  Attempt $i/15..."
  sleep 2
done

echo "ERROR: Server failed health check after 30 seconds"
docker compose logs --tail=50
exit 1
