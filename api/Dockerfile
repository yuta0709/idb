FROM maven:latest

WORKDIR /app

COPY . .

RUN ["mvn", "clean", "package"]

RUN wget 'https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh'
RUN chmod 755 wait-for-it.sh


FROM openjdk:latest

WORKDIR /app

COPY --from=0 /app/target/api.jar .
COPY --from=0 /app/wait-for-it.sh .
COPY ./entrypoint.sh .

RUN ln -f -s /usr/share/zoneinfo/Japan /etc/localtime

CMD ["./entrypoint.sh"]