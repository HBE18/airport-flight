<h1 style="text-align: center;">
  Airport Management API
</h1>
<h2>
    An airport management API inspired from Schiphol Airport Management API.
</h2>
<p>
  This API is being developped just for R&D purposes so there is no intent of direct use of it.<br>
  This being stated, API is designated to work on local computer and connected to a local database freshly created with given given creation scripts.<br>
</p>

<p>
  Used techs: <br>
  - Typescript for API language<br>
  - Express.js for API framework<br>
  - NodeJS for development environment<br>
  - CommonJs and ES2020 for Javascript base
</p>
<h2>
    Routes of API:
</h2>
<p>
    / : API base point, just returns a welcome string <br>
    /flight : Takes body paramter id for flight-id and returns a json for given flight from Schiphol Airport public-flights api.<br>
    /fligts : Takes query parameters for direction, flight type and destination. All these parameters are optional.<br>
    /signup : Takes body parameters => (All string) name, midname(optional), surname, password, email<br>
    /login : Takes email and password in body, creates a session with given credentials if the data matches<br>
    /logout : Deletes session.
</p>

<p>
  Node execution environment should be setted up as powershell since npm scripts do include powershell exclusive command patterns.<br> (Powershell 7.2.4 have been used.)<br>
  At the start, please run npm run i for installation of node_modules.<br>
  Use "npm run start" for starting server.<br>
  You can use "npm run min-start" for fast boot.<br>
  Use "npm run dev" for starting server in development mode via nodemon.
</p>
