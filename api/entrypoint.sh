#!/bin/bash


./wait-for-it.sh mysql:3306 --timeout=30 --strict -- mysqladmin ping -h $DB_HOST -u $DB_USER -p${DB_PASSWORD}

java -jar ./api.jar -Duser.timezone=Asia/Tokyo