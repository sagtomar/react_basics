### Starting Commands:

**git init** : for setting up empty repository

**npx create-react-app "project name"** : for creating a new project to start

**npm start** : to run the project


## Project Structure

/**public** : This folder contain the default html page "index" and assets 

/**src** : This folder contains all the logic for the app

## Key Files

**/src/index.js** : This file is the starting point of the app. **ReactDOM.render** is the method to initialize the app.
it takes in 2 arguments

1. initial design element or page to render
2. pointing to starting html page (addressing the id in the /public/index.html page's div ID)

createElement method actually allows up to implement Parent child (nested) tree structure of the contents.
But this approach introduce lots of efforts and makes it prone to errors.

So instead we use JSX and get rid of React.createElement, what is does, it takes normal html and converts into this format(done by Babel)

## Components

These are functions that return JSX (UI) content for the DOM.

instead of adding html in index page we can import this function from other file.

Every component function has access to "props" parameter, which is an empty object by default but we can add values to it to use it in functions.

We add the key and value to the main App function which can be passed to the function we want to use it in.

**while adding image, It gives error if we try to source a file out of src folder.

## Further Topics Covered

### Fragment

### Conditional Rendering

### Destructuring Array and Objects

Detailed Notes with images: https://www.notion.so/React-740ff862369d41ad8826ba1942a58e70