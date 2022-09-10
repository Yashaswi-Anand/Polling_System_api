# Polling System API

## _Only API based project_

It is the server application in NodeJS and MongoDB database used. In this application, anyone can create as many question with answer and also votes to it.

## Features
- Create a question
- Add options to a question
- Add a vote to an option of question
- Delete a question
- Delete an option
- View a question with it’s options and all the votes given to it.
- View all questions and options

## Routes
- /question/questions (get all question)
- /question/create (To create a question)
- /question/:id/options/create (To add options to a specific question)
- /question/:id/delete (To delete a question)
- /option/:id/delete (To delete an option)
- /option/:id/add_vote (To increment the count of votes)
- /question/:id (To view a question and it’s options)

## Tech
- NodeJS
- ExpressJS
- MongoDB

# Hosted URL
```sh
http://my-polling-api.herokuapp.com/
```

