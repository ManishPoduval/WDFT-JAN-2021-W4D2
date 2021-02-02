/*

// --------------------------
// MODULE-EXPORTS AND REQUIRE
// --------------------------
console.log('Yayyy! Node JS works!')
// second step is to require information
let {age, countries} = require('./data.js')

//same as above
let data = require('./data.js')
let age = data.age


console.log(age)
countries.forEach((country) => {
        console.log(country)
})

*/

// --------------------------
// CHALK LIBRARY
// --------------------------
/*
const chalk = require('chalk');
 
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
 
console.log(error('Error!'));
console.log(warning('Warning!'));
*/
// --------------------------
// FAKER LIBRARY
// --------------------------

/*
const faker = require('faker');

for(let i=0; i< 11; i++){
    let randomName = faker.commerce.productName();
    let randomPrice = faker.commerce.price();
    console.log(randomName)
    console.log(randomPrice)
}




*/
// --------------------------
// Setting up a server in NodeJs
// --------------------------

/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Worlds');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

*/
// --------------------------
// EXPRESS
// --------------------------

// SET UP A SERVER WITH EXPRESS
const express = require('express')
const app = express()

//Middlewares
/*
app.use((req, res, next) => {
    console.log('In the middleware')
    // next allows the client to proceed further and access all the routes defined afterwards
    next()
})
*/

//all our static files are in that location
// define the absolute path for our static files
app.use( express.static(__dirname + '/public') )

// route to handle the /home request
app.get('/home', (req, res) => {
  // SENDFILE IS USED ONLY WHILE RENDEING HTML FILES
  // We always need to give absolute paths in `sendFile`
  res.sendFile( __dirname + '/views/home.html')
})

app.get('/about', (req, res) => {
  // SENDFILE IS USED ONLY WHILE RENDEING HTML FILES
  res.sendFile( __dirname + '/views/about.html')
})
 
// route to handle the / request
app.get('/', function (req, res) {

  res.sendFile( __dirname + '/views/landing.html')
})


// ACTIVITY SOLUTIONS

/*
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send("Hi there, welcome to my assignment!")
})

// define a dynamic route 
app.get('/speak/:animal', (req, res) => {
  let animal = req.params.animal
  if (animal == 'pig') {
      res.send("The pig says 'Oink!'")
  }
  else if (animal == 'cow') {
    res.send("The cow says 'Moo'")
  }
  else if (animal == 'dog') {
    res.send("The dog says 'Woof Woof!'")
  }
  else {
    res.send('This animal does not exist')
  }
 
})

// define a dynamic route
app.get('/greet/hello/:num', (req, res) => {
    let num = req.params.num
    let str = ''
    for (let i=0; i<num; i++) {
      str += 'hello '
    }
    res.send(str)
})

// define a dynamic route
app.get('/greet/blah/:num', (req, res) => {
  let num = req.params.num
  let str = ''
  for (let i=0; i<num; i++) {
    str += 'blah '
  }
  res.send(str)
})


//The * will match everything in the url
// hence we must write this route at the end always

app.get('*', (req, res) => {
  res.send("Sorry, page not found...Blame our developer")
})

*/

//ACTIVITY ENDS HERE
 
app.listen(3000)
