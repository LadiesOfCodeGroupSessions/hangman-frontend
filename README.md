# Hangman Frontend

## Requirements

- Install Node.js
- Install npm

## Getting Started

- npm install
- npm start

## How to install additional packages

- npm install axios

## TODO

- update material ui - DONE
- remove cypress - DONE
- focus on unit testing, replace enzyme with react testing library - DONE
- create new page for game (seperate game and welcome screen) - NOT NEEDED
- create component that draws the lines for each character of secret word - DONE
- create component that show keyboard and disables incorrect letters
- create alert for game outcome
- create function that takes lives and returns correct image
- create component that shows the image
- add button to start new game in alert
- we need to hide secret word from the api response


## Learning
- Async assertions must be awaited or returned [docs](https://github.com/jest-community/eslint-plugin-jest/blob/v24.3.2/docs/rules/valid-expect.md)


## Sample response from teh guess endpoint
{
    "gameId": 1,
    "secretWord": "CHOCOLATE",
    "gameInProgress": true,
    "lives": 10,
    "incorrectLetters": [],
    "correctLetters": [
        {
            "letter": "A",
            "position": [
                6
            ]
        }
    ]
}