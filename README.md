# Note Taker App - Express JS Challenge

The challenge is to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

## Github
[Github Repo](https://github.com/KrispyKhang/SVG-Logo-Maker)

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
![](./ReadMeAssets/Jan-28-2024%2011-19-53.gif)

- As you view the walkthrough. We opened our terminal and did "npm test" from our jest package where we test to see if our js works.
- Then ran "nodemon server" where we run the inquirer prompt.
- The inquirer prompt which we're able to access through the Inquirer package asks us a series of questions on our SVG cosmetic preferences.
- After answering the series of questions on the prompt, our SVG logo is created.
- See screenshot below of the finished product.

![](./ReadMeAssets/Screenshot%202024-01-28%20at%2011.06.25%20AM.png)

