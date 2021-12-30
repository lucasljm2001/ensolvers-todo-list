#!/bin/bash

sudo apt update
sudo apt upgrade -y
sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
nvm install 14.15.0
sudo apt install nodejs
sudo apt install npm
sudo nvm use 14.15
sudo npm install -g @angular/cli
sudo apt install apache2
sudo apt install php libapache2-mod-php php-mbstring php-xmlrpc php-soap php-gd php-xml php-cli php-zip php-bcmath php-tokenizer php-json php-pear
sudo apt install mysql-server
curl -sS https://getcomposer.org/installer | php
cd backend
composer update
mv .env.example .env
cd ../
cd frontend
npm install
cd ../
sudo mysql -h 127.0.0.1:8000 -u root -p  
\. ./database-schema/todo-list.sql
exit;
sudo /etc/init.d/mysql start
cd backend
cd ../
cd frontend
sudo php artisan serve
sudo ng serve --o