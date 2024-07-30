let chosenOperator = '';

function fetchCalculations() {
  axios({
    method: 'GET',
    url: '/calculations'
  })
    .then((response) => {
   //   console.log(response);
      if (response.data.length > 0) {
        renderCalculations(response.data);
      }
    })
}
function renderCalculations(calculations) {
  let currentResult = document.getElementById('currentResult');
  const resultToRender = calculations[calculations.length - 1].result;
  currentResult.textContent = resultToRender;

  let calculationHistory = document.getElementById('calculationHistory');

  calculationHistory.innerHTML = '';

  for (let calc of calculations) {
    calculationHistory.innerHTML += `
      <li>${calc.numOne} ${calc.operator} ${calc.numTwo} = ${calc.result}</li>
    `
  }
}

function handleOperatorClick(event, operator) {
  event.preventDefault();
  chosenOperator = operator;
}
function createCalculation(event) {
    event.preventDefault();
  
    const numOne = document.getElementById('numOneInput').value
    const numTwo = document.getElementById('numTwoInput').value
  
    const newCalculation = {
      numOne: numOne,
      numTwo: numTwo,
      operator: chosenOperator
    }
    console.log ("The createCalculation is calling the POST")
    axios({
      method: 'POST',
      url: '/calculations',
      data: newCalculation
    })
      .then((response) => {
      console.log("The POST response works");

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