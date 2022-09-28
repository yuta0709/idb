#!/bin/sh


# ./wait-for-it.sh mysql:3306 --timeout=30 --strict -- mysqladmin ping -h $DB_HOST -u $DB_USER -p${DB_PASSWORD}
until mysqladmin ping -h mysql --silent; do
  echo "waiting for mysql"
  sleep 2
done


java -jar ./api.jar -Duser.timezone=Asia/Tokyo