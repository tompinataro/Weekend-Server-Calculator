console.log('client.js is sourced!');

let operator = "no operator assigned"
function addOperator(event, newOperator){
    console.log ("this is the operator:", newOperator);
    event.preventDefault();
    operator = newOperator; //resets 
}

function createCalculation(event) {
    event.preventDefault();
    let numOne = document.getElementById('numOne').value;
    console.log("Here is numOne:", numOne);
    let numTwo = document.getElementById('numTwo').value;
}

// * The client-side code **must** be able to:
//   * Obtain "new calculation" data via user input
// * A global `calculations` array to store *calculation objects*.
let calculationsArray = [];
// //* Each *calculation object* stored in the `calculations` array 
// //should have this shape:

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


  

