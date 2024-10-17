#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ec2-user/cicd

 
#install node modules
npm install

#start our node app in the background
node app.js > app.out.log 2> app.err.log < /dev/null & 