<h2/>This is a coding assessment for a prospective employer</h2> 

<h5>Visit the deployed app <a href="https://geogoi.herokuapp.com">here</a>!!</h5>
<h3/>The brief was to:</h3> <ul>
  <li>Build a responsive HTML Game that works on desktop and mobile browsers.  Choose the best suited JavaScript framework</li>
  <li>Use a given JSON file containing city names, with empty longitude and latitude strings</li>
    <li>Find the right location of each city as lat/long values and extend the JSON file</li>
    <li>Test it on mobile devices and give list of browsers/devices the game has been tested on</li>
    <li>Explain how you would store the high score</li>
    <li>Explain what you would do better</li>
</ul>

<h3>list of browsers and devices tested so far</h3>
<ul>
  <li>Google Chrome 93.0.4</li>
   <li>Firefox 91.0.1</li>
  <li>Microsoft Edge 93.0.961.52</li>
  <li>Responsiveness tested using Google Chrome device toolbar to emulate Mobile devices of different dimentions</li>
</ul></h5>
<h3>How would you store the high score?</h3>
  <p>For this I think using a database is the most effective solution - my database of choice is MongoDB.  After generating a new database/collection using the mongoShell, I would create a new folder in my App which contains: Server.js, database.js and HighScoreModel.js.  I use a similar template for setting up sever.js and database.js for a node/express app, so for briefness I will direct you to my other repositories (olsen-video, milk-records and MERN-e-commerce) for a demonstration of how these files would look in this app.  Ultimately server.js would include a post request for the creation of a new database entry.</p>
  <p>While there is the option of having users create profiles and store high scores using userID or similar, I think for such a simple app, the classic arcade-style high score would be the best option(i.e. a user enters name or initials, and this is posted to the database rather than unique user info).  Therefore, the high score Model would contain, for example, score (accumulated correct answers and km left) and user's input name or initials, which would be stored in a state variable.</p>
  <p>The method for communicating between the frontend input and the backend database is to use redux with actions and reducers.  In this instance, the reducer would outline "cases", for example HIGHSCORE-INPUT-REQUEST, HIGHSCORE-INPUT-SUCCESS, HIGHSCORE-INPUT-FAIL etc.  The reducer will then be imported to a store, which allows one to share state between components. The action would be fired(dispatched) from the front end and make a request to the server.  My preferred method for this is to use Axios, as it reduces the amount of code, and allows for very simlpe syntax to be used.</p>
<h3>Explain what you would do better</h3>
<p One noticeable bug in the game is that I have left the satellite-view button visible, which reveals the names of cities, ultimately defeating the point of the game. This can be fixed using the Google Maps Styling Wizard, and generating a new map id.</p>
<p/>Given more time, I would have an instructions panel or modal shown at the beginning, and have users click a button to confirm they have understood the instructions.  In terms of code, I could make Homepage.js tidier by moving the logic for 'win, lose, play, check' cases into a seperate file.</p>
