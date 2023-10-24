FROM openjdk:17-jdk-slim

ARG JAR_FILE=target/*.jar

COPY ${JAR_FILE} products-service.jar

ENTRYPOINT ["java", "-jar", "/products-service.jar"]

EXPOSE 5001