# Weekend Challenge: Server Side Calculator
🟥 🟡 ✅
Your task is to create a calculator app that demonstrates your understanding of the client/server request/response cycle. To ensure that your app is making sensible use of the request/response cycle:
✅ (server.js 18-27)* All mathematical logic **must** be implemented on the server.

✅ * Calculation history data **must** be stored on the server.

* The client-side code **must** be able to:
  
✅ * Ask the server for its calculation history, then render it appropriately on the DOM.
  
✅ * Obtain "new calculation" data via user input, then send it to the server.

---

## Requirements:
🟥 🟡 ✅
#### Client-Side:

🟡 (Client line 30) * Inside the `<section data-testid="resultHistory">` element, display a list of all previous calculations on the page when it loads (using a `GET '/calculations'` request). 

🟡 * Update this list when a new calculation is made.

🟡 (Client line 61) * Inside the `<section data-testid="recentResult">` element, display the most recent calculation **result**.
✅ * Update this when a new calculation is made.
🟡 (index.html line 21) * Inside `<form data-testid="calculator">`:
🟡 * Create a user interface where the user can input two values and select a mathematical operator.
✅ * Each mathematical operator is represented by a button:
      * `<button>+</button>`
🟡 * When the `=` button is clicked, capture the input values and operator, then send this data to `POST '/calculations'`. You'll need to format it like so:
🟡  * `{ numOne: 25, numTwo: 10, operator: '+' }`
✅  * There should be a `'C'` button that will clear the inputs.

#### Server-Side:

✅ * Create a `GET '/calculations'` route that will send the `calculations` array back to the client. When populated with data, this array needs to be shaped like this:
✅   (Server.js 17-27)
* ```js
      [
        {
          numOne: 3,
          numTwo: 5,
          operator: '+',
          result: 8
        },
        {
          numOne: 11,
          numTwo: 7,
          operator: '-',
          result: 4* ```js
      [
        {
          numOne: 3,
          numTwo: 5,
          operator: '+',
          result: 8
        },
        {
          numOne: 11,
          numTwo: 7,
          operator: '-',
          result: 4
        }
      ]
        }
      ]
    ```
🟡 * Create a `POST '/calculations` route that will "do the math" and obtain the correct `result` value. It must be able to handle addition, subtraction, multiplication, and division.
🟡 * For example, if the `POST` route receives this data:
🟡 * `{ numOne: 25, numTwo: 10, operator: '+' }`
🟡 * It should "do the math," then push this object into the server-side `calculations` array:
🟡 * `{ numOne: 25, numTwo: 10, operator: '+', result: 35 }`
🟡 * After this successful calculation, the `POST` route must send status `201` back to the client.
✅ * 🔥 Note: **Do not use** the built-in JS `eval()` function. It's incredibly dangerous to obtain user input and *execute it as code*!

#### Note About Data Persistence:

* The entire *calculation history* and *most recent calculation's result* should be correctly rendered, even after refreshing the page.
  * The data lives on the server!
* It's expected that these things will "go away" after restarting the server. We'll talk about long term data storage next week.

#### Base Mode Calculator Interface:

<img src="./images/baseMode.png" alt="base mode calculator interface" width="400px">

---
🟥 🟡 ✅

## About the Built-In Tests:

**To Get the Tests Up and Running**:
✅* Run `npm install` to install the libraries that the automated tests rely on. Then, at any point, you can execute the test suite by running:
✅ * `npm test`
    * This command will run the client and server test files, but when a test fails, the remaining tests in that file will be skipped.
✅* If you'd like to run **all** of the tests in a given file, without skipping any, you can do:
 * `npm run test:server`
 * `npm run test:client`

**For the Tests to Work Correctly**:
* You will need to ensure your code meets these requirements:
  * <details>
      <summary>Client-Side Specifications</summary>
      <summary>Client-Side Specifications</summary>

      * The calculator `<form>` must have this attribute:
(TxP: Should be in index.HTML not client.js)

✅ html line 21       * `data-testid="calculator"`
      * Your number `<input>`s must have this attribute:
✅ html line 21       * `data-testid="numOne"` for the first number
✅ html line 21         * `data-testid="numTwo` for the second number
✅  html line 23-29      
     * All `<button>` text content is as specified:
✅  * `data-testid="numTwo` for the second number
✅   * `+` `-` `*` `/` `=` `C`
 
 * The most recent calculation result needs to be rendered somewhere inside the `<section>` element that has the `data-testid="recentResult"` attribute. For example, this would be just fine:
  ✅   html 32   * ```html
  ✅       <section data-testid="recentResult">
  ✅         <h2>525</h2>
  ✅      </section>
          ```
  ✅   * The list of calculation history needs to be rendered 
  ✅    somewhere inside the `<section>` element that has the 
  ✅     HTML 40`data-testid="resultHistory"` attribute.
    
    </details>

  * <details>
    <summary>Server-Side Specifications</summary>
    <summary>Server-Side Specifications</summary>

    * A global `calculations` array to store *calculation objects*.
    * Each *calculation object* stored in the `calculations` array should have this shape:
      * ```js
            {
              numOne: 10,    // 👈 number
              numTwo: 5,     // 👈 number
              operator: '+', // 👈 string
              result: 15     // 👈 number
            }
        ```
    * A `GET '/calculations'` route that sends the `calculations` array back to the client.
    * A `POST '/calculations'` route that:
      * Expects to receive a `req.body` with this shape:
        * ```js
            {
              numOne: 10,
              numTwo: 5,
              operator: '+'
            }
          ```
      * Performs the currect mathematical operation to obtain a `result` value.
      * Pushes the resulting calculation object into the `calculations` array.
      * Sends HTTP status code `201` back to the client.
    </details>

---

## Stretch Goals:

* Only allow the `POST` request to happen if all necessary input is ready.
  * *Data integrity is of maximum importance! Sometimes users hit the "go button" without fully inputting the needed fields. Display an alert if they left something empty, and don't send bad or incomplete data to the server.*

* Allow a user to clear the calculation history by clicking on a button. (This should empty out the `calculations` array on the server!) Technically this shouldn't be a `GET` or a `POST`. Look into making a `DELETE` request!
  * *`GET`s are used to, well, get information from the server. `POST`s are used to send new info to the server. `DELETE`s are used for, you guessed it, deleting info already on the server.*

* Modify the calculator interface to look and behave like an actual calculator, as shown below.
  * *Interfaces that mirror real world objects are often more intuitive and self-explanatory for users.*
  * **NOTE:** This will cause the client-side tests to fail! If you're feeling extra stretchy, see if you can figure out how to write new tests that verify your new interface. (This will be tricky!)
  <img src="./images/stretchGoal_interface.gif" alt="stretch goal calculator interface" width="400px">

* Allow a user to click on an entry in the calculation history to re-run that calculation. This should display the answer on the calculator interface like a normal calculation.
  * *Anticipating what users will desire, then adding that feature to the interface is often a logical progression that ends up being a project's "next step."*

---

## Whew:

That was a lot. Thank you, sincerely, for reading all of it carefully. 🙂