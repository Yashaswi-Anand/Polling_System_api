<h4>Polling System API</h4>


MongoDB altas => new Project 
    - create database
    - create username and password (save password for futher use)
    - add ip address : click (i) my ip address for locally run (ii) 0.0.0.0/0 for everywhere to run
    - create cluster 
    - connect ->connect your application -> select nodejs with version -> copy url to add our code with mongoDB
    - npm start -> Connected to database :: MongoDB -> hit api and see in mongoDB atlas


Heroku => new 
    - app name (create app) 
    - connect to github
    - search project which want to deploy (connect and select branch)
    - create a file in our project(in vs code) -> procfile (and type -> web: node index.js) 
    - npm i dotenv
    - create .env file and write some secret keys and access by {process.env.variableName} not in bracket
    - go to heroku project setting -> Config Vars -> add env mongo url in key pair based.