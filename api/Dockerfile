FROM maven:latest

WORKDIR /app

COPY pom.xml .

RUN ["mvn", "verify", "--fail-never"]

COPY . .

RUN ["mvn", "package"]



FROM openjdk:18-jdk-alpine3.15

WORKDIR /app

RUN apk add mysql-client

COPY --from=0 /app/target/api.jar .
COPY --from=0 /app/entrypoint.sh .

RUN chmod +x ./entrypoint.sh

RUN ln -f -s /usr/share/zoneinfo/Japan /etc/localtime

ENTRYPOINT ["./entrypoint.sh"]