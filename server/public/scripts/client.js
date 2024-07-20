console.log('client.js is sourced!');


function createCalculation(event) {
event.preventDefault();
let numOne = document.getElementById('firstNumber').value;
let numTwo = document.getElementById('secondNumber').value;
let operator = document.getElementById('operator').value;
}
// * The client-side code **must** be able to:
//   * Obtain "new calculation" data via user input
// * A global `calculations` array to store *calculation objects*.
let calculationsArray = [];
// //* Each *calculation object* stored in the `calculations` array 
// //should have this shape:
let calculationObject = {
    numOne: number,    // 👈 number
    numTwo: number,     // 👈 number
    operator: 'string' // 👈 string
//     result: number     // 👈 number    ??????? The client side is only taking in 
//    // three variables; so, I'm not sure why the insx are requiring the result before 
//    //sending it to the server when it is only on the server that the result will be calculated.
   // one google response suggested setting result to null; another suggested to delete it...
  }

    // Add the new calculation to the calculations array
    calculationsArray.push(newCalculation);
//then send it to the server.

    axios({
    method: 'POST',
    url: '/calculation',
    data: newCalculation
    })
 .then ((result) => {
 console.log('result is:', result);
  
 //fetchResult();


// function fetchResult() {

//   axios({
//     method: 'GET',
//     url:'/result'
//   })
//   .then((result) => {
//     const theResults = response.data;
//     console.log(theResults);

 // function reset(event) {
    //   axios({
    //     method: 'POST',
    //     url: '/reset',
    //     data: ''

 
//* Ask the server for its calculation history, 
//then render it appropriately on the DOM.
 })