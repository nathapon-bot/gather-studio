#!/bin/bash
set -e

# Railway sets PORT; default to 80
export PORT=${PORT:-80}

# Generate nginx config from template (substitutes $PORT)
envsubst '$PORT' < /etc/nginx/sites-available/default.template \
    > /etc/nginx/sites-enabled/default

# Start play/pusher service in background
# Use tsx directly from root node_modules (workspace hoisting)
cd /app/play
TSX_TSCONFIG_PATH=tsconfig-pusher.json tsx src/server.ts &

# Wait for pusher to be ready
echo "Waiting for pusher to start..."
for i in $(seq 1 30); do
    if curl -sf http://127.0.0.1:3000/ok > /dev/null 2>&1 || \
       curl -sf http://127.0.0.1:3000/ > /dev/null 2>&1; then
        echo "Pusher is ready!"
        break
    fi
    sleep 2
done

# Start nginx in foreground
echo "Starting nginx on port $PORT..."
nginx -g "daemon off;"
