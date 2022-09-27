FROM maven:latest

WORKDIR /app

COPY . .

RUN ["mvn", "clean", "package"]

RUN wget 'https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh'


FROM maven:latest

WORKDIR /app

RUN apt-get update && \
    apt-get install -y mysql-client

COPY --from=0 /app/target/api.jar .
COPY --from=0 /app/wait-for-it.sh .
COPY ./entrypoint.sh .

RUN chmod +x ./wait-for-it.sh
RUN chmod +x ./entrypoint.sh

RUN ln -f -s /usr/share/zoneinfo/Japan /etc/localtime

ENTRYPOINT ["./entrypoint.sh"]