# Note Taker App - Express JS Challenge

The challenge is to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

## Github
- [Github Repo](https://github.com/KrispyKhang/Note-Taker)
- [Functional Deployed App Via Heroku](https://notetakerkhang-198ce7b8a3b3.herokuapp.com/)

## Table of Contents
- User Story 
- Acceptance Criteria
- Packages Installeed
- Walkthrough

## User Story
- AS A small business owner
- I WANT to be able to write and save notes
- SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Acceptance Criteria
- GIVEN a note-taking application
- WHEN I open the Note Taker
- THEN I am presented with a landing page with a link to a notes page
- WHEN I click on the link to the notes page
- THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
- WHEN I enter a new note title and the note’s text
- THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
- WHEN I click on the Save button
- THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
- WHEN I click on an existing note in the list in the left-hand column
- THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
- WHEN I click on the "New Note" button in the navigation at the top of the page
- THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears


## Packages Installed
- Node Modules (run "npm i" on terminal)
- Express JS (npm i express) - framework in Node JS - allows to build multipage in nodeJS - manages servers and routes.
- UUID (Universally Unique ID) (npm i uuid) - generates cryptographically secure UUIDS 

## Walkthrough
![](./ReadMeAssets/Jan-28-2024%2013-28-21.gif)

- BONUS - Added a DELETE Request where users can delete their logged tasks.
- Note Taker app - Can add, remove, etc..
- uses API routes created 
- Express JS - Server hosted PORT 3001 for a multipage web build

## Challenges
# Deployment!
- Deploying to Heroku was a challenge. 
- installation process was easy, but finding the error was hard when opening the app from Heroku Repository.
- The issue was my server.js: the const PORT = 3001 did not work.
- Changed const Port = 3001 -> const PORT = process.env.PORT || 3001;
- For some reason, that worked although i dont have an .env file 
- Created a Procfile (Heroku based) - where server.js will be the first to run.

