# SpringBootAngular6Integration
An integration of Angular 6 with  Spring Boot

Steps to run the project:

1. From the project's home directory go to:
  src\main\web-app and do: 
  npm install
  
2. and build Angular project:
  npm run build or ng build --prod
  
3. Once done, verify bundle files are generated and placed inside:
  src\main\resources\static folder
  
4. From home directory run:
  mvn clean install
 
5. On successful build run the jar:
  java -jar target\srm-0.0.1-SNAPSHOT.jar

6. Then verify the project running on:
  http://localhost:8080/
