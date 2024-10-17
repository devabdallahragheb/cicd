#!/bin/bash
# Remove .gitignore if it exists
if [ -f /home/ec2-user/cicd/.gitignore ]; then
  rm -f /home/ec2-user/cicd/.gitignore
fi
