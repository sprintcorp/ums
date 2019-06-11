# Create the container from the alpine linux image
FROM alpine:latest

# Add nginx and nodejs
RUN apk add --update nginx nodejs npm

# Create the directories we will need
RUN mkdir -p /tmp/nginx/ums
RUN mkdir -p /var/log/nginx
RUN mkdir -p /var/www/html

# Copy the respective nginx configuration files
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# Set the directory we want to run the next commands for
WORKDIR /tmp/nginx/ums
# Copy our source code into the container
COPY www/ .

# install @vue/cli globally
RUN npm install -g @vue/cli && npm install -g @vue/cli-service-global

# Install the dependencies, can be commented out if you're running the same node version
RUN npm install

# confirm files.
RUN ls

# run webpack and the vue-loader
RUN npm run build

# copy the built app to our served directory
RUN cp -r dist/* /var/www/html

# make all files belong to the nginx user
RUN chown nginx:nginx /var/www/html

# start nginx and keep the process from backgrounding and the container from quitting
CMD ["nginx", "-g", "daemon off;"]