# SpringBootAngular6Integration
An integration of Angular 6 with  Spring Boot

Steps to run the project:

1. From the project's home directory go to:
  src\main\web-app
  run> npm run build or ng build --prod
  
2. Once done, verify bundle files are generated and placed inside:
  src\main\resources\static folder
  
3. From home directory run:
  mvn clean install
 
4. On successful build run the jar:
  java -jar target\<generated jar name> => java -jar target\srm-0.0.1-SNAPSHOT.jar

5. Then verify the project running on:
  http://localhost:8080/
