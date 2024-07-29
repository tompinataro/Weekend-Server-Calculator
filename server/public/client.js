let chosenOperator = '';

function fetchCalculations() {
  // Make an HTTP GET request to /calculations:
  axios({
    method: 'GET',
    url: '/calculations'
  })
    // The response we receive from the server
    // will get passed into the .then's callback fn:
    .then((response) => {
      // VERIFY that the response arrived:
      console.log(response);

      // Call the render function and hand it the data
      // we got back from the server, but ONLY if response.data
      // is NOT an empty array:
      if (response.data.length > 0) {
        renderCalculations(response.data);
      }
    })
}

function renderCalculations(calculations) {
  // Update the h2#currentResult's text with the most recent result:
  let currentResult = document.getElementById('currentResult');
  const resultToRender = calculations[calculations.length - 1].result;
  currentResult.textContent = resultToRender;

  // Select the part of the DOM I wish to manipulate:
  let calculationHistory = document.getElementById('calculationHistory');

  // Clear out the current contents of ul#calculationHistory:
  calculationHistory.innerHTML = '';

// Loop through calculationHistory and add a <li>
  // into the ul#calculationHistory:
  for (let calc of calculations) {
    calculationHistory.innerHTML += `
      <li>${calc.numOne} ${calc.operator} ${calc.numTwo} = ${calc.result}</li>
    `
  }
}

function handleOperatorClick(event, operator) {
  event.preventDefault();

  // Assign whichever operator was clicked to
  // the global variable that will keep track of
  // the most recently pressed operator:
  chosenOperator = operator;
}

function createCalculation(event) {
    event.preventDefault();
  
    // Obtain the values of the two inputs:
    const numOne = document.getElementById('numOneInput').value
    const numTwo = document.getElementById('numTwoInput').value
  
    // Create the "new calculation" object that I will
    // need to send to the server:
    const newCalculation = {
      numOne: numOne,
      numTwo: numTwo,
      operator: chosenOperator
    }
    
    // Make an HTTP POST request and send the newCalculation
    // object to the server:
    axios({
      method: 'POST',
      url: '/calculations',
      data: newCalculation
    })
      // The response we receive from the server
      // will get passed into the .then's callback fn:
      .then((response) => {

            // VERIFY that the response arrived:
      console.log(response)

      fetchCalculations();
    })
}

function resetCalculator(event) {
  event.preventDefault();

  chosenOperator = '';
  const numOne = document.getElementById('numOneInput').value = '';
  const numTwo = document.getElementById('numTwoInput').value = '';
}

fetchCalculations();





// //old
// console.log('client.js is sourced!');

// let operator = "no operator assigned"
// function addOperator(event, newOperator){
//     console.log ("this is the operator:", newOperator);
//     event.preventDefault();
//     operator = newOperator; //resets 
// }

// function createCalculation(event) {
//     event.preventDefault();
//     let numOne = document.getElementById('numOne').value;
//     console.log("Here is numOne:", numOne);
//     let numTwo = document.getElementById('numTwo').value;
// }

// // * The client-side code **must** be able to:
// //   * Obtain "new calculation" data via user input
// // * A global `calculations` array to store *calculation objects*.
// let calculationsArray = [];
// // //* Each *calculation object* stored in the `calculations` array 
// // //should have this shape:
// console.log("Line 23 client.js should appear in the browser console");

// let newCalculationObject = {
//     numOne: numOne, //key value pair
//     numTwo: numTwo,
//     operator: operator,
//     result: '',
// };
//     console.log(newCalculationObject);

//     // Add the new calculation to the calculations array
//     calculationsArray.push(newCalculationObject);

    
//then send it to the server.
//     axios({
//     method: 'POST',
//     url: '/calculations',
//     data: newCalculationObject
//     })
//  .then ((result) => {
//  console.log('result is:', result);
  
//  fetchResult();
//  })

// function fetchResult() {
// axios({
//      method: 'GET',
//      url:'/calculations'
//    })
//    .then((result) => {
//      const theResults = result.data;
//      console.log(theResults);
//    })

//  function reset() {
//        axios({
//          method: 'POST',
//          url: '/reset',
//          data: ''
//         })
//  }
// // * Ask the server for its calculation history, 
// // then render it appropriately on the DOM.

// function renderResults (results){
//   }}

//   // Fetch and update the calculation history when the page loads
// async function fetchCalculations() {
//     try {
//       const response = await fetch('/calculations');
//       const data = await response.json();
//       updateCalculationHistory(data);
//     } catch (error) {
//       console.error('Error fetching calculations:', error);
//     }
//   }
  
  // Update the calculation history


  

