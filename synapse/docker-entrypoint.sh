#!/bin/bash
set -euo pipefail

# ─── Synapse entrypoint for Railway ──────────────────────────────────
# On every container start:
#  1. Ensure secrets + signing key exist (generate once, persist in /data).
#  2. Render /conf/homeserver.yaml from env vars.
#  3. Launch Synapse.
#
# Required env vars:
#   SYNAPSE_SERVER_NAME      e.g.  wa-office.local
#   SYNAPSE_PUBLIC_BASEURL   e.g.  https://synapse-xxx.up.railway.app
#   PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE  (Postgres conn)
# Optional (auto-generated + persisted if unset):
#   SYNAPSE_REGISTRATION_SHARED_SECRET, SYNAPSE_FORM_SECRET, SYNAPSE_MACAROON_SECRET
# ──────────────────────────────────────────────────────────────────────

: "${SYNAPSE_SERVER_NAME:?must be set}"
: "${SYNAPSE_PUBLIC_BASEURL:?must be set}"
: "${PGHOST:?must be set}"
: "${PGPORT:=5432}"
: "${PGUSER:?must be set}"
: "${PGPASSWORD:?must be set}"
: "${PGDATABASE:?must be set}"

mkdir -p /data /data/media_store

SECRETS_FILE=/data/secrets.env

# Generate and persist secrets on first boot (re-use thereafter)
if [ ! -f "$SECRETS_FILE" ]; then
    echo "[entrypoint] Generating secrets on first boot…"
    {
        printf 'SYNAPSE_REGISTRATION_SHARED_SECRET=%s\n' "$(head -c 32 /dev/urandom | base64 | tr -d /+= | head -c 40)"
        printf 'SYNAPSE_FORM_SECRET=%s\n'                 "$(head -c 32 /dev/urandom | base64 | tr -d /+= | head -c 40)"
        printf 'SYNAPSE_MACAROON_SECRET=%s\n'             "$(head -c 32 /dev/urandom | base64 | tr -d /+= | head -c 40)"
    } > "$SECRETS_FILE"
fi
# shellcheck source=/dev/null
. "$SECRETS_FILE"
export SYNAPSE_REGISTRATION_SHARED_SECRET SYNAPSE_FORM_SECRET SYNAPSE_MACAROON_SECRET

# Signing key — generate once, persist in volume
if [ ! -f /data/signing.key ]; then
    echo "[entrypoint] Generating signing.key…"
    python -m synapse.app.homeserver \
        --server-name "$SYNAPSE_SERVER_NAME" \
        --config-path /data/tmp-gen.yaml \
        --generate-config \
        --generate-keys \
        --report-stats=no \
        -H "$SYNAPSE_SERVER_NAME" \
        --keys-directory /data \
        || true
    # The generate step creates a config we don't want; keep only the signing key.
    rm -f /data/tmp-gen.yaml /data/"$SYNAPSE_SERVER_NAME".log.config
    # `--generate-keys` names the file after server_name; rename to a stable path
    if [ -f "/data/${SYNAPSE_SERVER_NAME}.signing.key" ]; then
        mv "/data/${SYNAPSE_SERVER_NAME}.signing.key" /data/signing.key
    fi
fi

# Render the final homeserver.yaml from the template using env vars
echo "[entrypoint] Rendering /data/homeserver.yaml …"
envsubst < /conf/homeserver.yaml.tmpl > /data/homeserver.yaml

# Sanity echo (no secrets)
echo "[entrypoint] server_name=$SYNAPSE_SERVER_NAME"
echo "[entrypoint] public_baseurl=$SYNAPSE_PUBLIC_BASEURL"
echo "[entrypoint] postgres=$PGHOST:$PGPORT/$PGDATABASE"

# Launch Synapse
exec python -m synapse.app.homeserver --config-path=/data/homeserver.yaml
