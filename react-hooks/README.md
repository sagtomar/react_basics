### Starting Commands:

**git init** : for setting up empty repository

**npx create-react-app "project name"** : for creating a new project to start

**npm start** : to run the project

**npm test** : to run test on project that are applied

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

## Testing (supplied with JEST)

Files created with extention filename.test.js will be considered for testing purpose by the testing library (JEST).

test function takes 2 arguments,

1. name of the test
2. callback for calling the function and testing it

Type of Testing covered: Assertion Testing

**Testing simple functions** 
**Testing UI Element**
**Testing Component**

The `fireEvent.click` method will simulate an end user clicking a checkbox on a webpage form. From there, you can write assertion tests.

An assertion test returns a pass or fail; it will return a pass when a function's output returns an expected value.

App.test.js is created by default when Create React App is installed, and any file ending in `.test.js` can be used for testing.

checking the status of the checkbox if the value is set to from the initial value of false after testing.

The `render` component from the React Testing Library allows you to assert whether specific words, phrases, or html tags were rendered.


Detailed Notes with images: https://www.notion.so/React-740ff862369d41ad8826ba1942a58e70