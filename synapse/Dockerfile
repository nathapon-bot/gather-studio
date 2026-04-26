FROM matrixdotorg/synapse:latest

# Install gettext for envsubst (used to render config template from env vars)
# and curl for healthcheck
USER root
RUN apt-get update \
 && apt-get install -y --no-install-recommends gettext curl \
 && rm -rf /var/lib/apt/lists/*

# Bring in our templates and entrypoint
COPY homeserver.yaml.tmpl  /conf/homeserver.yaml.tmpl
COPY log.config            /conf/log.config
COPY docker-entrypoint.sh  /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh \
 && mkdir -p /data \
 && chown -R 991:991 /data /conf

USER 991:991

# Synapse HTTP port — exposed internally, Railway proxies public TCP
EXPOSE 8008

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
