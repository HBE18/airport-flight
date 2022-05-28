# An airport management API inspired from Schiphol Airport Management API

## Introduction

  This API is being developped just for R&D purposes so there is no intent of direct use of it.  

  This being stated, API is designated to work on local computer and connected to a local database freshly created with given creation scripts.  

## Used techs

- Typescript for API language  
- Express.js for API framework  
- NodeJS for development environment  
- CommonJs and ES2020 for Javascript base
- PostgreSQL for database (PG Admin usage recommended)

### Node Packages

- cors : Cors package enables cross origin requests to be fetched in express.  

- pg (short for postgres) : Postgres package enables API to access and run scripts in our postgreSQL database.

- node-fetch : Node-Fetch package is node instance of Fetch api. Using this package, API will be able to send requests to another APIs, in our example Schiphol Public API.  

- nodemon : Nodemon is a development QoL package which provides various ease of development functions like auto re-build on change.  

## Routes

- / : Base endpoint.

- /register : User register endpoint.

- /login : User login.

- /flights : Getting all flights data from schiphol api with specified date and time options in request body.

- /flight : Getting specific flight by using flightId in request body.

## How To Use  

- First, download/clone files.  
- Second, open project in code editor of your choice. VSCode has been used in development and is recommended.  
- Third, open terminal in folder which project files are in and type `npm i` command. This will download all required node packages.  
- Then, prepare your database with given database scripts in [HERE]('https://github.com/HBE18/airport-management/blob/d57ca0da3e057ba665fad5dbe7ed7a26237efadc/src/database/scripts.md').
- Then, you can start the API by using given scripts:  

  - `npm run start` : This script clears previous outputs and generates a fresh build and runs it.  
  - `npm run min-start` : This script builds project and runs it. Difference between this and previous script is that this script does not clear but just builds project and runs.  
  - `npm run comp` : This script builds project but does not run it. Intended use of this script is as a sub script of previous scripts.  
  - `npm run prep` : This script clears previous outputs. Intended use of this script is as a sub script of previous scripts.  
  - `npm run dev` : This script starts project in development mode using nodemon package. For consistent and stable builds using `start` or `min-start` scripts are recommended.  

## Pre-requisities and Restrictions

This project run on node environment so node and npm should be installed and ready. Node can be downloaded from [HERE](https://nodejs.org/en/download/).  

Also, node execution environment should be setted as Powershell since `prep` and  `start` scripts do use Powershell spesific functions. To do this please run `npm config set script-shell {your powershell directory}`.  
If you don't want to do so, you can just avoid using `prep` and `start` scripts.  

This project uses postgreSQL database to store all API related data so postgreSQL should be downloaded and installed. PostgreSQL can be downloaded from [HERE](https://www.postgresql.org/download/).
