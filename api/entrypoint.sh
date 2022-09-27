#!/bin/bash


./wait-for-it.sh mysql:3306

java -jar ./api.jar -Duser.timezone=Asia/Tokyo