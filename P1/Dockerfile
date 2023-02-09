# Installing host software
FROM ubuntu:latest

# Updating repositories
RUN apt-get update && apt-get upgrade -y

# Installing apache
RUN apt-get install apache2 -y

# Installing node
RUN apt-get install nodejs -y

# Copying virtual host files
COPY ./apache/config_files/ports.conf /etc/apache2/
COPY ./apache/config_files/apache.conf /etc/apache2/sites-available/
COPY ./apache/config_files/node.conf /etc/apache2/sites-available/

# Copying web server files
COPY ./apache/public_html /var/www/sites/apache
COPY ./node/public_html /var/www/sites/node

# Exposing ports
EXPOSE 80
EXPOSE 81

# Enabling sites
RUN a2dissite 000-default
RUN a2ensite apache
RUN a2ensite node

# Launching apache
CMD ["apache2ctl", "-D", "FOREGROUND"]