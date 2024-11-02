# Use the official Nginx image as a parent image
FROM nginx:alpine

# Copy the static website files to the Nginx HTML directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# No CMD needed as the default command in the Nginx image is to run Nginx