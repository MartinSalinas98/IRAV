# Installing host software
FROM ubuntu:latest

# Updating repositories
RUN apt-get update && apt-get upgrade -y

# Installing apache
RUN apt-get install apache2 -y

# Installing node
RUN apt-get update
RUN apt install nodejs npm -y

# Insatalling supervisord
RUN apt install supervisor

# (NODE) Esto lo mismo va despues de la copia de ficheros de node
WORKDIR /usr/local/apache2/htdocs

# (NODE) Express o cualquier modulo
RUN npm install express 


# Copying virtual host files
COPY ./apache/config_files/ports.conf /etc/apache2/
COPY ./apache/config_files/apache.conf /etc/apache2/sites-available/
COPY ./apache/config_files/node.conf /etc/apache2/sites-available/

# Copying web server files (Esto no porque estan en volumes en docker-compose)
#COPY ./apache/public_html /var/www/sites/apache
#COPY ./node/public_html /var/www/sites/node

# Exposing ports
EXPOSE 80
EXPOSE 81
EXPOSE 3000

# Enabling sites
RUN a2dissite 000-default
RUN a2ensite apache
RUN a2ensite node

COPY ./supervisord/config.conf /etc/supervisor/conf.d/supervisord.conf
# Launching apache
# CMD ["node", "/var/www/sites/node/ejemplo.js &", "&&", "apache2ctl", "-D", "FOREGROUND"]
# Esto se debe tambien a tener el volume en lugar del copy CREO
#CMD pwd && find . -name "ejemplo.js"
#CMD ["node", "node/ejemplo.js", "&", "&&", "apache2ctl", "-D", "FOREGROUND"]
CMD ["/usr/bin/supervisord"]
