#!/bin/bash

sudo apt update
sudo apt upgrade -y
sudo apt install nodejs
sudo apt install npm
apt-get install git-all
git clone https://github.com/lucasljm2001/ensolvers-todo-list.git
sudo npm install npm@latest -g
sudo npm install -g @angular/cli
sudo apt install apache2
sudo apt install php libapache2-mod-php php-mbstring php-xmlrpc php-soap php-gd php-xml php-cli php-zip php-bcmath php-tokenizer php-json php-pear
sudo apt install mysql-server
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
chmod +x /usr/local/bin/composer
npm run start 
&
cd ../backend-folder
php artisan serve