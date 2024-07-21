const express = require('express');
const app = express();
let PORT = process.env.PORT || 5010;

//should port above be 5001?????

// // Serve up static files (HTML, CSS, Client JS)
app.use(express.json());
app.use(express.static('server/public'));

// Global variable (ARRAY) that will contain all of the
// calculation objects:
let calculations = []

//* All mathematical logic **must** be implemented on the server.
//* Calculation history data **must** be stored on the server.

function doMath(req) {
  if (operator ==='+') {
    req.result = req.numOne + req.numTwo;
    } else if (operator ==='-') {
    req.result = req.numOne - req.numTwo;
    } else if (operator ==='*') {
    req.result = req.numOne * req.numTwo;
    } else if (operator ==='/') {
    req.result = req.numOne / req.numTwo;
}

// *********** Here's a wonderful place to make some routes:************
// * A `GET '/calculations'` route that sends the 
//`calculations` array back to the client.

// * A `POST '/calculations'` route that:
//   * Expects to receive a `req.body` with this shape:
//     * ```js
//         {
//           numOne: 10,
//           numTwo: 5,
//           operator: '+'
//         }


// GET /calculations

// * Create a `GET '/calculations'` route that will send 
// the `calculations` array back to the client. 
app.get('/calculations', (req, res) => {
  console.log('GET /calculations received a request!');
  res.send(calculations);
})

app.post('/reset', (req, res) => {
  console.log('\treq.body is:', req.body)
})

  // When populated with data, this array needs to be shaped like this:

      // [
      //   {
      //     numOne: 3,
      //     numTwo: 5,
      //     operator: '+',
      //     result: 8
      //   },
      //   {
      //     numOne: 11,
      //     numTwo: 7,
      //     operator: '-',
      //     result: 4
      //   }
      // ]

// POST /calculations
// * Create a `POST '/calculations` route that will "do the math" 
// and obtain the correct `result` value. 
// It must be able to handle addition, subtraction, multiplication, 
// and division.
//   * For example, if the `POST` route receives this data:
//     * `{ numOne: 25, numTwo: 10, operator: '+' }`
//   * It should "do the math," then push this object into 
//   * the server-side `calculations` array:
//     * `{ numOne: 25, numTwo: 10, operator: '+', result: 35 }`


function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;

  // let result;

  // switch (operator) {
  //     case '+':
  //         result = num1 + num2;
  //         break;
  //     case '-':
  //         result = num1 - num2;
  //         break;
  //     case '*':
  //         result = num1 * num2;
  //         break;
  //     case '/':
  //         if (num2 === 0) {
  //             alert("Cannot divide by zero.");
  //             return;
  //         }
  //         result = num1 / num2;
  //         break;
  //     default:
  //         alert("Invalid operator.");
  //         return;
  // }

  document.getElementById('result').innerHTML = `Result: ${result}`;
}


app.post('/calculations', (req, res) => {
  console.log('\treq.body is:', req.body)
  
  

//   * After this successful calculation, 
//   * the `POST` route must send status `201` back to the client.
  res.sendStatus(201);
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
}