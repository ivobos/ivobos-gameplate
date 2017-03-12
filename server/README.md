# Server setup
Any node environment should do.
# Setting up node.aptive.net
This is how node.aptive.net was setup:
* Created a 512MB / 20BGB Disk / SGP1 droplet instance with Ubuntu NodeJS 6.9.5 on 16.04
* added an node hostname to aptive.net domain
* created a new sudo user
```bash
    # adduser ivobos
    # usermod -aG sudo ivobos
```
* Since this is a 515MB instance we need to create swap file otherwise things will fail
```bash
    $ sudo dd if=/dev/zero of=/swapfile bs=1024 count=1024k
    $ sudo mkswap /swapfile
    $ sudo chmod 600 /swapfile
    $ sudo swapon /swapfile
```
* Open up game port
```bash
    $ sudo ufw allow 8088
```
# Building the server
Clone gameplate repo and install dependencies
```bash
$ git clone https://github.com/ivobos/ivobos-gameplate.git
$ cd ivobos-gameplate
$ cd server
$ npm install
$ npm run build
```
# Local dev loop
Run the server in local dev from server directory
$ cd server
$ npm start
Run the client from top level project directory
$ npm start
Open client in a browser with http://localhost:8080/
Add a local value with key "servername" and Value "localhost", this can be done in Chrome by opening
dev tools, going to Application tab, Storage section for http://localhost:8080 and editing
servername key/value to use localhost.

# Running the server using pm2
* Install pm2
```
$ sudo npm install -g pm2
$ pm2 start dist/bundle.js
```
* Configure pm2 to restart on reboot
```
$ pm2 startup
$ sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ivobos --hp /home/ivobos
```

