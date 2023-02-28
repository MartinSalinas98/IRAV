# Installing host software
FROM ubuntu:latest

# Updating repositories
RUN apt-get update && apt-get upgrade -y

# If user comes from Windows, copied files need to be changed to unix encoding
RUN apt-get install dos2unix -y

#APACHE
# Installing apache
RUN apt-get install apache2 -y

# Copying virtual host files
COPY ./apache/config_files/ports.conf /etc/apache2/
COPY ./apache/config_files/apache.conf /etc/apache2/sites-available/apache.conf

WORKDIR /usr/local/apache2/htdocs

# Exposing apache port
EXPOSE 80

# Enabling sites
RUN a2dissite 000-default.conf
RUN a2ensite apache.conf

# NODE
# Install node and the node installer 
RUN apt-get install nodejs -y
RUN apt-get install npm -y

# Change workdir to install express
WORKDIR /usr/local/apache2/htdocs

# Install Express or any other module needed
RUN npm install express -y

#Exposing node port
EXPOSE 3000

# SUPERVISORD
# Insatalling supervisord
RUN apt-get install supervisor -y

COPY ./supervisord/config.conf /etc/supervisor/supervisord.conf

# VSFTP
RUN apt-get install vsftpd -y
COPY ./vsftpd/vsftpd.conf /etc/
RUN dos2unix /etc/vsftpd.conf

# Crear usuario vsftp
RUN adduser martin
RUN echo "contrasena\ncontrasena" | passwd martin
RUN mkdir /home/martin/ftp
RUN chown nobody:nogroup /home/martin/ftp

RUN mkdir -p /var/run/vsftpd/empty

EXPOSE 20
EXPOSE 21

# Launching apache
CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisor/supervisord.conf"]