#!/bin/bash

sudo apt update
sudo apt upgrade -y
sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
nvm install 14.4.0
sudo apt install nodejs
sudo apt install npm
sudo npm install npm@latest -g
sudo npm install -g @angular/cli
sudo apt install apache2
sudo apt install php libapache2-mod-php php-mbstring php-xmlrpc php-soap php-gd php-xml php-cli php-zip php-bcmath php-tokenizer php-json php-pear
sudo apt install mysql-server
sudo mysql -u root -p todo-list < database-schema/todo-list.sql
curl -sS https://getcomposer.org/installer | php
composer update
sudo npm run start && sudo php artisan serve