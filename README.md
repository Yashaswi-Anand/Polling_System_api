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

## Project demo
```sh
{
    "questionData": {
        "_id": "631c94e2e66e0a898df7957b",
        "question": "What a beauty !!!",
        "options": [
            {
                "_id": "631c9551e66e0a898df79580",
                "text": "Beauty is not in the face, beauty is a light in the heart.",
                "votes": 0,
                "link_to_vote": "http://localhost:5000/option/631c9551e66e0a898df79580/add_vote",
                "__v": 0
            },
            {
                "_id": "631ca16df5755d25d59d4b96",
                "text": "Beauty means feeling good about yourself.",
                "votes": 1,
                "link_to_vote": "http://localhost:5000/option/631ca16df5755d25d59d4b96/add_vote",
                "__v": 0
            },
            {
                "_id": "631ca65b909556a77d0aa25d",
                "text": "These are qualities such as joy, love, grace, gentleness, unselfishness.",
                "votes": 0,
                "link_to_vote":
                "http://localhost:5000/option/631ca65b909556a77d0aa25d/add_vote",
                "__v": 0
            },
            {
                "_id": "631ca67e909556a77d0aa266",
                "text": "The personality of a person including his/her mind and character.",
                "votes": 0,
                "link_to_vote": "http://localhost:5000/option/631ca67e909556a77d0aa266/add_vote",
                "__v": 0
            }
        ],
        "__v": 0
    },
    "message": "Question fetch successfully."
}
```

# Hosted URL
```sh
http://my-polling-api.herokuapp.com/
```

