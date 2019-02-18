## HeyJobs test automation task submission
To run the React/Redux AUT you can use npm as follows:



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


Mocha framework has been used along with chai assertions to make the test readible and user friendly.
Allure report has been used to generate test report once executed.


To trigger the automated tests, use the below command:
```
npm test
```
To generate the report from existing Allure results you can use the following command:
```
$ allure generate <directory-with-results> --clean
```
To open the report, use the below command:
```
$ allure open
```
