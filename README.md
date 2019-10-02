## Test Automation using webdriverIO
As a first step, run the React/Redux AUT. For this you can use npm as follows:



#### Running with npm
```
npm start
```
Application will be available on localhost:3333

Once the server is listening port 3333, run the below automation . wdio  has been used to formulate the automated test cases to test the below scenarios:

*When users open the job list, they can see a list of 5 jobs with pictures, company names and locations.
*After users click on a job from the list, they can see job details.
*Users can navigate back from a job details page to the job list
*Users see error message when they visit an unknown URL e.g. http://localhost:3333/foo

The first 3 scenarios have been grouped as separate Test Suites. The last scenario has been checked on every page a user views since it can be encountered at any point of the user's navigation.

Mocha framework has been used along with chai assertions to make the test readible and user friendly.
Allure report has been used to generate test report once executed.


To trigger the automated tests, use the below command:
```
npm test
```
Console output can be viewed to check the progress of each test case execution.

## To generate the report from existing Allure results after test execution is completed, use the following command:
```
$ allure generate <directory-with-results> --clean
```
Example:$ allure generate E:/automation-task-wdio/reports/allure-results --clean


To open the report, use the below command:
```
$ allure open
```
Relevant Test Suites can be checked to view results of pass/fail for individual test case
