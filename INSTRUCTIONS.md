
 


#### Server-Side:


    ```


#### Note About Data Persistence:

* The entire *calculation history* and *most recent calculation's result* should be correctly rendered, even after refreshing the page.
  * The data lives on the server!
* It's expected that these things will "go away" after restarting the server. We'll talk about long term data storage next week.

#### Base Mode Calculator Interface:

<img src="./images/baseMode.png" alt="base mode calculator interface" width="400px">

---

## About the Built-In Tests:

**To Get the Tests Up and Running**:
* Run `npm install` to install the libraries that the automated tests rely on.
* Then, at any point, you can execute the test suite by running:
  * `npm test`
    * This command will run the client and server test files, but when a test fails, the remaining tests in that file will be skipped.
* If you'd like to run **all** of the tests in a given file, without skipping any, you can do:
  * `npm run test:server`
  * `npm run test:client`

