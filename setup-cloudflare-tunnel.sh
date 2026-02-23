#!/bin/bash
set -e

echo "=== Setting up Cloudflare Tunnel for Pathfinder ==="

# Check if cloudflared is installed
if ! command -v cloudflared &> /dev/null; then
  echo "Installing cloudflared..."
  curl -L --output cloudflared.deb https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
  sudo dpkg -i cloudflared.deb
  rm cloudflared.deb
  echo "cloudflared installed."
fi

TUNNEL_NAME="pathfinder-game"
HOSTNAME="pathfinder-api.collinsoik.dev"

# Check if already authenticated
if ! cloudflared tunnel list &> /dev/null; then
  echo "Please authenticate with Cloudflare:"
  cloudflared tunnel login
fi

# Check if tunnel exists
if cloudflared tunnel list | grep -q "$TUNNEL_NAME"; then
  echo "Tunnel '$TUNNEL_NAME' already exists."
else
  echo "Creating tunnel '$TUNNEL_NAME'..."
  cloudflared tunnel create "$TUNNEL_NAME"
fi

# Get tunnel ID
TUNNEL_ID=$(cloudflared tunnel list | grep "$TUNNEL_NAME" | awk '{print $1}')
echo "Tunnel ID: $TUNNEL_ID"

# Create config
CONFIG_DIR="$HOME/.cloudflared"
mkdir -p "$CONFIG_DIR"

cat > "$CONFIG_DIR/config-pathfinder.yml" <<EOF
tunnel: $TUNNEL_ID
credentials-file: $CONFIG_DIR/$TUNNEL_ID.json

ingress:
  - hostname: $HOSTNAME
    service: http://localhost:3007
  - service: http_status:404
EOF

echo "Config written to $CONFIG_DIR/config-pathfinder.yml"

# Create DNS route
echo "Setting up DNS route: $HOSTNAME -> $TUNNEL_NAME"
cloudflared tunnel route dns "$TUNNEL_NAME" "$HOSTNAME" 2>/dev/null || echo "(DNS route may already exist)"

echo ""
echo "=== Setup complete ==="
echo "To run the tunnel:"
echo "  cloudflared tunnel --config $CONFIG_DIR/config-pathfinder.yml run $TUNNEL_NAME"
echo ""
echo "To install as a service:"
echo "  sudo cloudflared service install --config $CONFIG_DIR/config-pathfinder.yml"
echo "  sudo systemctl enable cloudflared"
echo "  sudo systemctl start cloudflared"
