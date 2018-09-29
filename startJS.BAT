cd ..
start cmd /k "Start Mongo.bat"
cd SimpleWow && cd NodeJS
start cmd.exe /k nodemon db.js
start cmd.exe /k nodemon index.js
cd .. && cd SimpleWow
start cmd.exe /k ng serve 

