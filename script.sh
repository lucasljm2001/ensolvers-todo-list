#!/bin/bash

sudo apt update

sudo apt upgrade -y

sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

nvm install 14.15.0

sudo apt install nodejs

sudo apt install npm

sudo nvm use 14.15

sudo npm install -g @angular/cli

cd todolist

mvn install 

mvn spring-boot:run

cd ../

cd frontend

npm install

cd ../

sudo mysql -h 127.0.0.1:8000 -u root -p  
\. ./database-schema/todo-list.sql
exit;

sudo /etc/init.d/mysql start

cd frontend

sudo ng serve --o