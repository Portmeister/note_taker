# Note Taker

## Description

An application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file. The application frontend has already been created, The goal of this project is to build the backend and connect the two.

The following HTML routes have been created to support the applications overall functionality:

  * GET `/notes` - Returns the `notes.html` file.

  * GET `*` - Returns the `index.html` file

* The application posesses a `db.json` file on the backend that is used to store and retrieve notes using the `fs` module.

The following API routes have been created:

  * GET `/api/notes` - Reads the `db.json` file and returns all saved notes as JSON.

  * POST `/api/notes` - Receives a new note to save on the request body and adds it to the `db.json` file, and then returns the new note to the client.

  * DELETE `/api/notes/:id` - Receives a query parameter containing the id of a note to delete given each notes unique `id` assigned when it's saved. Delete note reads all notes from the `db.json` file, removes the note with the given `id` property, and then rewrites the notes to the `db.json` file.

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Acceptance Criteria
- Application allows users to create and save notes.
- Application allows users to view previously saved notes.
- Application allows users to delete previously saved notes.

## Deploying the App

You will not be able to deploy your server side code on GitHub pages. This app should be deployed on Heroku. Carefully follow the [Heroku Guide](../04-Important/HerokuGuide.md) for getting your app deployed on Heroku.

## Submission on BCS

You are required to submit the following:

* The URL of the deployed application. This should be the link to the url provided by Heroku. Be sure not to submit a link to the Heroku dashboard.

* The URL of the GitHub repository: https://github.com/Portmeister/note_taker

## Contributions
- developed front end code provided by © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
- back end server and routing code written by Carrol W. Porter (Portmeister)