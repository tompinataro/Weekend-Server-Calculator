const express = require('express');
const app = express();
let PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static('server/public'));

// Global variable that will contain all of the
// calculation objects:
let calculations = [];


// Here's a wonderful place to make some routes:

// GET /calculations
app.get('/calculations', (req, res) => {
    // VERIFY that the request arrived:
    console.log('GET /calculations received a request!');
  
    // Send the calculations array as the response:
    res.send(calculations)
  })


  // POST /calculations
app.post('/calculations', (req, res) => {
    // VERIFY that the request arrived:
    console.log('POST /calculations received a request!');
    // VERIFY that req.body is what we expect:
    console.log('req.body is:', req.body);
  
    // Grab the values from req.body:
    const numOne = Number(req.body.numOne);
    const numTwo = Number(req.body.numTwo);
    const operator = req.body.operator;
  
    // Do the math and store the result object in the
    // calculations array:
    let calculationResult = {
      numOne: numOne,
      numTwo: numTwo,
      operator: operator
    }

  if (operator === '+') {
    calculationResult.result = numOne + numTwo;
  } else if (operator === '-') {
    calculationResult.result = numOne - numTwo;
  } else if (operator === '*') {
    calculationResult.result = numOne * numTwo;
  } else if (operator === '/') {
    calculationResult.result = numOne / numTwo;
  }

  calculations.push(calculationResult);

  // VERIFY that we did the math and stored a new calculation
  // in the calculations array:
  console.log('calculations is now:', calculations);

  // Let the client know we've successfully created
  // and stored a new calculation:
  res.sendStatus(201); // "CREATED"
})

// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
    PORT = 5001;
  }
  
  // This starts the server...but also stores it in a variable.
  // This is weird. We have to do it for testing reasons. There
  // is absolutely no need for you to reason about this.
  const server = app.listen(PORT, () => {
    console.log('server running on: ', PORT);
  });
  
  // server.setTimeout(500)

  // This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
    server.close();
  }
  
  app.setCalculations = (calculationsToSet) => {
    calculations = calculationsToSet;
  }
  
  module.exports = app;
