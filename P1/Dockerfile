FROM ubuntu:latest

RUN apt update && apt upgrade -y

RUN apt install apache2 -y

EXPOSE 80

CMD ["apache2ctl", "-D", "FOREGROUND"]