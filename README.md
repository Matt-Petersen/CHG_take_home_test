# Welcome to my take home exam
This covers the basic testing for the Heroku app at http://the-internet.herokuapp.com/login

# Functionality covered:
- A test to verify the correct items are displayed on a view
- A test to login with invalid credentials and ensure an error is displayed
- A test to login with valid credentials and asserts on the updated view

## Running a Test
To run the tests with Playwright installed you would use the following command
```
npx playwright test
```
If you want to run with a visual UI you would use 
```
npx playwright test --ui
```
