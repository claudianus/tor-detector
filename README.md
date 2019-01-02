## What is tor-detector
This is a node.js fullstack web application that tells you're using tor or not

## Screenshot
<img src="https://s.put.re/46WRz3A6.PNG" alt="screenshot" width="300px">

## How to install and host on your server (Ubuntu 18.04)
Install node.js if you haven't installed node.js yet
```bash
# https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt-get install -y nodejs
``` 


First of all you need to download this repo
```bash
$ git clone https://github.com/claudianus/tor-detector.git
$ cd tor-detector
```

Then install dependencies

```bash
$ npm install
```

and start the app (server)

```bash
# start the server but if you're in production pm2(http://pm2.keymetrics.io/) is recommended
$ npm start
```

That's it
