sudo yum update -y
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs
sudo yum install -y git
git clone https://github.com/devabdallahragheb/cicd.git
cd cicd
 
 
#  #!/bin/bash
# #download node and npm
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
# . ~/.nvm/nvm.sh
# nvm install node
 
# #create our working directory if it doesnt exist
# DIR="/home/ec2-user/cicd"
# if [ -d "$DIR" ]; then
#   echo "${DIR} exists"
# else
#   echo "Creating ${DIR} directory"
#   mkdir ${DIR}
# fi

 