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

## Hooks

### useState

used to keep track of local variables and manage the state as per our need

import {useState} from "react";

useState takes 2 arguments,

1. variable of an array - to keep track of local variable
2. function - to update the state/ value of the variable

### useEffect

to manage side effects that are not related to the component's render

The `useEffect` Hook is useful to perform additional work behind the scenes, without affecting the appearance of the webpage.

can be helpful for console messages, animation, user data or we can say it looks for change in some variable values and we can take action accordingly and keep a record of them.

import {useEffect} from "react";**

It takes a callback function which takes 2 arguments

1. variable/ manual use
2. Dependency Array, if we keep it empty array i.e. [] then it will not take other values.... it will show only the value for the first time and will show a warning in console for missing dependency. And if we pass currentMood in it, then we can keep track of it

If we don't pass the variable in the dependency array then it will print console for both every time even if only one is changed. to monitor the value and console for only the one that is updated. then pass value in the array as shown below

### useReducer

these are used to reduce the function by managing 2 arguments

1. function that has to reduced for managing the functionality
2. initial state

import {useReducer} from "react";

Detailed Notes with images: https://www.notion.so/React-740ff862369d41ad8826ba1942a58e70