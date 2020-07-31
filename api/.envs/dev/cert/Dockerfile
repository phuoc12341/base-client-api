
FROM ubuntu:18.04

ARG USERID=1001
ARG GROUPID=1001
ENV USERID=${USERID} GROUPID=${GROUPID}

# Install os packages
RUN apt-get update && apt-get install -y \
    sudo \
    openssl \
    apache2-utils\
    --no-install-recommends apt-utils

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

COPY cert/rootCA.csr.cnf /scripts/

COPY cert/v3.ext /scripts/

COPY cert/*.sh /scripts/

RUN chmod a+x /scripts/*.sh

# Create new username: cert
RUN useradd -ms /bin/bash cert --no-log-init

# Modify cert user_id:group_id to current host_user_id:host_group_id
RUN usermod -u $USERID cert
RUN groupmod -g $GROUPID cert

RUN sudo echo "cert ALL=(ALL:ALL) NOPASSWD: ALL" > /etc/sudoers.d/cert

# Set user to running image
USER cert

ENTRYPOINT ["sh", "/scripts/entrypoint.sh"]

CMD ["/scripts/command.sh", "localhost"]
