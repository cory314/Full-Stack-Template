This repository is intended to act as a bare template for full stack javascript projects.

It uses React for the Client, Express.JS for a simple lightweight server and MongoDB for a non-relational Database.

WebPack and Babel are configured for ease of development auto compiling the client as changes are saved.

Nodemon is utilized similarly on the server side.

Static files are served from public/bundle.js created by webpack from the SRC client directory.

Es-Lint uses the popular AirBNB style guide.

Installed test suite is the Jest framework.

Consult package.JSON for dependencies and scripts.

Start by running:
```
Yarn install
```
To install all packages, make sure you have Yarn installed.

Next run

```
yarn dev
```
To compile and run the client with webpack handling any code changes live.

Finally run
```
yarn server
```
To start the server and serve static files in bundle.js. From your browser, go to localhost:port to view the resultant application.

05/19/2022 This is in something less than a BETA version. A growing todo list can be found at:

https://trello.com/b/6PspL3tt/full-stack-template