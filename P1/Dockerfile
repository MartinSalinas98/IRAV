FROM ubuntu:latest

RUN apt-get update && apt-get upgrade -y
RUN apt-get install apache2 -y
EXPOSE 80

COPY ./apache/public_html /usr/local/apache/htdocs
COPY ./apache/config_files/apache.conf /etc/apache2/sites-available/
COPY ./apache/config_files/node.conf /etc/apache2/sites-available/

CMD ["apache2ctl", "-D", "FOREGROUND"]