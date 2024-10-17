#!/bin/bash
echo "Cleaning /home/ec2-user/cicd directory" >> /tmp/cleanup.log
rm -rf /home/ec2-user/cicd/*
echo "Cleanup completed" >> /tmp/cleanup.log
