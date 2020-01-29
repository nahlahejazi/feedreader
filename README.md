# Feed Reader - Jasmine testing project

Created for the Udacity Nanodegree Front End Web Developer.

[See here](https://nahlahejazi.github.io/feedreader/)

## Table of Contents

* [Project Description](#project-description)
* [Jasmine Documentation](#jasmine-documentation)
* [How to Run - Instructions](#How to Run - Instructions)
* [Tests Implemented] (#Tests Implemented)
* [Sources](#sources)

## Project Description

Students were given [a starter project](https://github.com/udacity/frontend-nanodegree-feedreader) - a web-based application that reads RSS feeds, but with an incomplete test suite. 
A main goal was to test the RSS feed reader with Jasmine by modifying the feedreader.js file.

## Jasmine Documentation
https://jasmine.github.io/

## - How to Run - Instructions
- Download or clone this repository (all files) to your local machine 
- Open the `index.html` file in your browser 
- Check the tests results at the bottom of the page.

## Tests Implemented
1. A test that loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not empty.
2. A test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. A new test suite named `"The menu"`, with the following tests inside it:
  - A test that ensures the menu element is hidden by default.
  - A test that ensures the menu changes visibility when the menu icon is clicked. 
4. A new test suite named `"Initial Entries"`, with the following test inside it:
  - a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
5. A new test suite named `"New Feed Selection"`, with the following test inside it:
  - a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

## Sources:
- starter code: [Udacity](https://github.com/udacity/frontend-nanodegree-feedreader)
