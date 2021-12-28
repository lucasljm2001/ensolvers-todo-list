#!/bin/bash

apt update
apt upgrade -y
apt install nodejs
apt-get install git-all
git clone https://github.com/lucasljm2001/ensolvers-todo-list.git
npm install npm@latest -g
npm install -g @angular/cli
apt install apache2
apt install php libapache2-mod-php php-mbstring php-xmlrpc php-soap php-gd php-xml php-cli php-zip php-bcmath php-tokenizer php-json php-pear
apt install mysql-server
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
chmod +x /usr/local/bin/composer
npm run start 
&
cd ../backend-folder
php artisan serve