# _Doctor Lookup_

#### _Assignment for Epicodus to practice API calls are parsing responses._

#### By: _**Brenda Franco**_

## Description

_This webpage application is designed to return a list of available doctors in the Portland metro area using the [BetterDoctor API] (https://developer.betterdoctor.com/)._

_This project uses Webpack to bundle and minify the code. The test runner is Karma and the syntax flavor is Jasmine. Babel is used to transpile ES6. All dependencies required are included in this project. An API key from [BetterDoctor API] (https://developer.betterdoctor.com/) is required to run this project._

## Setup/Installation Requirements

* Clone repository on your local computer.
* If you already have Node, Homebrew, and Karma installed, then skip to "Install Dependencies."

#### Node: Windows / Linux Installation Instructions
  * To install Node on other systems, go to the <a href="https://nodejs.org/en/">Node website</a>, download and install the appropriate installer for your operating system.

#### Node: OSX Installation Instructions
  * On OS X systems, install Node.js through Homebrew with the following command in your home directory:
    ```
    $ brew install node
    ```
  * Confirm that node and npm (node package manager, installed automatically with Node) are in place by checking the versions (Node should be 4.0.x or higher, npm should be 3.6.x or higher):
    ```
    $ node -v
    $ npm -v
    ```
#### Homebrew Installation
  * If you do not have Homebrew installed yet, you may install it by copying and pasting this command:
    ```
    $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```
  * Next, ensure Homebrew packages are run before the system versions of the same (which may be dated or not what we want) by executing the following:
    ```
    $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile
    ```
#### Karma Installation
  * If you do not have Karma installed globally, then run the following:
    ```
    $ npm install -g karma-cli
    ```
#### Install dependencies
  * Enter the following code in the command line to install all dependencies:
    ```
    $ npm install
    ```
#### API Key
  You will need to make an account and an API key. Visit the [BetterDoctor API] (https://developer.betterdoctor.com/) site and click “Get a free API key”.
  After you sign up, your API key should be listed on the front page (ex: “a2c356ibgh44…..”) or under My Account > Applications.

  Once you have an API key do the following:
    * Create a .env file in the root directory of this project.
    * Add the API key in the .env file as shown:
    ```
    exports.apiKey=[YOUR-API-KEY-GOES-HERE]
    ```
#### Working with the project in Node:
  * To build and bundle the project in webpack run the following:
    ```
    $ npm run build
    ```
  * To run the local test server:
    ```
    $ npm run start
    ```
  * To run test in Karma:
    ```
    $ npm test
    ```
## Known Bugs

_Do not contact anyone with questions or comments regarding this project._

## Technologies Used

| Development dependencies | Front end dependencies |
| :------------ | :------------- |
| * webpack | * bootstrap |
| * eslint | * jquery |
| * karma & jasmine | * popper
| * babel-loader |  |
| * css-loader & style-loader | | |




### Specs
| Behavior |
| :-------------     |
| 1. The program will return a list of available doctors when given a medical issue. |
| 2. The program will return a list of available doctors when given a name. |
| 3. The program will return a list of available doctors with name information about each doctor. |
| 4. The program will return a list of available doctors with address information about each doctor. |
| 5. The program will return a list of available doctors with phone number information about each doctor. |
| 6. The program will return a list of available doctors with website information about each doctor. |
| 7. The program will return a list of available doctors with information about whether each doctor is accepting new patients. |
| 8. The program will return a notification stating an error if the API call results in an error (any message not a 200 OK). |
| 9. The program will return a "no results" error if the query does not return any results. |

### License

Copyright (c) 2018 ****_Brenda Franco_****

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
