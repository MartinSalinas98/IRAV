# Installing host software
FROM ubuntu:latest

# Updating repositories
RUN apt-get update && apt-get upgrade -y

# Installing apache
RUN apt-get install apache2 -y

# Installing node
RUN apt-get install nodejs -y
RUN apt-get install npm -y

# (NODE) Esto lo mismo va despues de la copia de ficheros de node
WORKDIR /var/www/node

# (NODE) Express o cualquier modulo
RUN npm install express 


# Copying virtual host files
COPY ./apache/config_files/ports.conf /etc/apache2/
COPY ./apache/config_files/apache.conf /etc/apache2/sites-available/
COPY ./apache/config_files/node.conf /etc/apache2/sites-available/

# Copying web server files (Esto no porque estan en volumes en docker-compose)
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
# CMD ["node", "/var/www/sites/node/ejemplo.js &", "&&", "apache2ctl", "-D", "FOREGROUND"]
# Esto se debe tambien a tener el volume en lugar del copy CREO
CMD ["node", "./node/ejemplo.js &", "&&", "apache2ctl", "-D", "FOREGROUND"]
