const express = require('express');
const app = express();
let PORT = process.env.PORT || 5002;

app.use(express.json());
app.use(express.static('server/public'));

let calculations = [];

app.get('/calculations', (req, res) => {
    console.log('GET /calculations got the request!');
      res.send(calculations)  //response w/array
  })

app.post('/calculations', (req, res) => {
    console.log('POST /calculations received a request!');
    console.log('req.body is:', req.body); //verification
  
    const numOne = Number(req.body.numOne);
    const numTwo = Number(req.body.numTwo);
    const operator = req.body.operator;
  
    let calculationResult = {  //response w/array
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
  console.log('calculations is now:', calculations); //array
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
