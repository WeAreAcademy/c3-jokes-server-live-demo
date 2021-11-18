//jokes from https://github.com/15Dkatz/official_joke_api

const express = require("express");
const app = express();

const allJokes = require("./theJokes.json");

//configure the app

//register a route handler for GET of '/jokes/random'
//app.get('/jokes/random', serveRandomJoke);

app.get("/", serveWelcome);

app.get("/jokes/first", serveFirstJoke);

app.get("/plainjokes/first", serveFirstJokePlain);

app.get("/jokes/random", serveRandomJoke);

//It is more typical to write the function inline
//But not clearer
app.get("/jokes", (req, res) => {
  res.json(allJokes);
});

//start the app listening on a port.
app.listen(5000, () => {
  console.log("Express server started listening ok!");
});

function serveWelcome(req, res) {
  res.send("Hello welcome to joke server");
}

function serveFirstJoke(req, res) {
  res.json(allJokes[0]);
}

function serveFirstJokePlain(req, res) {
  const firstJoke = allJokes[0];
  const text = firstJoke.setup + " " + firstJoke.punchline;
  res.send(text);
}

function serveRandomJoke(req, res) {
  res.json(pick(allJokes));
}

function pick(arr) {
  const ix = Math.floor(Math.random() * arr.length);
  return arr[ix];
}
