# Widget Test Suite
## Tools Used
* Cypress
* Javascript

## How To Run
* Clone this repo
* `npm i` to install node modules
* To open Cypress and run the tests on the UI use: `npx cypress run`
* To run the tests within the terminal use: `npx cypress run --spec "cypress/e2e/my-spec.cy.js"`

## Test Cases
1. Validate Form Is Empty - **REGRESSION** - this runs through the entire widget to ensure we are starting off with a clean slate.
2. Click On Widget And Enter All Required Fields - **REGRESSION** - here we are going through the entire widget and entering in all the necessary fields right up to the point of submitting the form.
3. Enter Zipcode Only - **SMOKE** - this is a checks that the functionality of submitting a zipcode works.
4. Open/Close Chat - **SMOKE** - checks the ability to open and close the popup window.
5. Validate Store Chosen - **REGRESSION** - checks the store we are selecting appears as the title on the form.

## Issues/Bugs
* Zipcode does not update the locations listed
* After info has been entered into the form, on next tests the information in the name field, and message field are still present
* Back button does not work once a location has been selected
* Application performance causes tests to be flaky at times

## How Tests Can Be Improved
* Functions could be added to reduce redundancy and to make certain cypress calls more robust.
* Locators could be stored within their own files to clean code up.
 