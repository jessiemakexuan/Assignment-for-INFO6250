# Goal:
    Design a signuppage using AngularJS. 
    After click submit button, collect all the input information into Raids
# Steps:
## 1.Deploy apache + php+redis+redis client 
      In your own VM, please input these command: 
        sudo apt-get update
        sudo apt-get install apache2
        sudo apt install php libapache2-mod-php
        sudo apt-get install -y php-pear
        sudo pear channel-discover pear.nrk.io
        sudo pear install nrk/Predis
        sudo apt-get install build-essential
        sudo apt-get install tcl8.5
        wget http://download.redis.io/releases/redis-stable.tar.gz
        tar xzf redis-stable.tar.gz
        cd redis-stable/
        make
        make test
        sudo make install
        cd utils
        sudo ./install_server.sh
        sudo service redis_6379 start
## 2.Enter /var/www/html, copy my hw4signuppage.html, hw4controller.js, app.php into your folder.
      hw4signuppage.html
      hw4controller.js
      app.php
## 3.Run it through your VM's public IP
      http://public ip/hw4signuppage.html
## 4.Check whether all of the information are saved in Redis
      http://public ip/app.php?cmd=get&key=messages
      
