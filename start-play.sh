#!/bin/bash
set -e

# Railway sets PORT; default to 80
export PORT=${PORT:-80}

# Generate nginx config from template (substitutes $PORT)
envsubst '$PORT' < /etc/nginx/sites-available/default.template \
    > /etc/nginx/sites-enabled/default

# Start play/pusher service in background, capture PID + logs
cd /app/play
TSX_TSCONFIG_PATH=tsconfig-pusher.json tsx src/server.ts > /tmp/pusher.log 2>&1 &
PUSHER_PID=$!
echo "Pusher started with PID $PUSHER_PID"

# Wait up to 180s for pusher to be ready (90 × 2s)
echo "Waiting for pusher to start..."
READY=0
for i in $(seq 1 90); do
    # Abort early if the process already died
    if ! kill -0 "$PUSHER_PID" 2>/dev/null; then
        echo "ERROR: Pusher process died!"
        tail -30 /tmp/pusher.log
        exit 1
    fi
    if curl -sf http://127.0.0.1:3000/ok  > /dev/null 2>&1 || \
       curl -sf http://127.0.0.1:3000/    > /dev/null 2>&1; then
        echo "Pusher is ready! (attempt $i, ~$((i*2))s)"
        READY=1
        break
    fi
    sleep 2
done

if [ $READY -eq 0 ]; then
    echo "WARNING: Pusher did not respond within 180s — starting nginx anyway"
    tail -30 /tmp/pusher.log
fi

# Forward SIGTERM/SIGINT to pusher + nginx gracefully
trap "echo 'Shutting down...'; kill $PUSHER_PID 2>/dev/null; nginx -s stop 2>/dev/null" SIGTERM SIGINT

# Start nginx in foreground
echo "Starting nginx on port $PORT..."
nginx -g "daemon off;"
