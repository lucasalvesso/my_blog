docker-compose down &&
 docker-compose rm &&
 docker-compose pull &&
 docker-compose build --no-cache &&
 docker-compose up -d --force-recreate
 sleep 1 

docker exec -it mongodb-local bash
mongo
use db_user
