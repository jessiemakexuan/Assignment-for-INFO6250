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
      http://public ip/app.php?cmd=get&key=message
      [notice: but now, it doesn't work, it seems like there is some mistake on Redis]
        <br />
        <b>Fatal error</b>:  Uncaught Predis\Connection\ConnectionException: php_network_getaddresses: getaddrinfo failed: Name or service not known [tcp://redis-slave:6379] in /usr/share/php/Predis/Connection/AbstractConnection.php:155
        Stack trace:
        #0 /usr/share/php/Predis/Connection/StreamConnection.php(128): Predis\Connection\AbstractConnection-&gt;onConnectionError('php_network_get...', 0)
        #1 /usr/share/php/Predis/Connection/StreamConnection.php(178): Predis\Connection\StreamConnection-&gt;createStreamSocket(Object(Predis\Connection\Parameters), 'tcp://redis-sla...', 4)
        #2 /usr/share/php/Predis/Connection/StreamConnection.php(100): Predis\Connection\StreamConnection-&gt;tcpStreamInitializer(Object(Predis\Connection\Parameters))
        #3 /usr/share/php/Predis/Connection/AbstractConnection.php(81): Predis\Connection\StreamConnection-&gt;createResource()
        #4 /usr/share/php/Predis/Connection/StreamConnection.php(258): Predis\Connection\AbstractConnection-&gt;connect()
        #5 /usr/share/php/Predis/Connection/AbstractConnection.php(180): Predis\Connection\StreamCon in <b>/usr/share/php/Predis/Connection/AbstractConnection.php</b> on line <b>155</b><br />

