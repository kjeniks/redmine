## E2E-testing project for SalesChamp

## Tests are here
salesChamp-QA-test/cypress/integration/SalesChamp/Check/pageCheck.spec.ts /
salesChamp-QA-test/cypress/integration/SalesChamp/Create/createLead.spec.ts /

## 1 Why Cypress
- I have search what is the ideal automation testing tool, I tryed cypress, selenium and codeception.
- From my point of view the Cypress is now one of the best tools to use for these reasons.
- It works with JavaScript/Typescript
- It is evolving platform with updates every month
- Can do E2E and integration tests
- We can test anything that is run in browser (docs too now)
- The cost of the platform is very low on what it can do 
- Good reporting
- My personal long experiences with this tool


## 2 How to present results of the tests
- I really like the Cypress Dashboard (https://www.cypress.io/dashboard/)
- this tool saves all runs of tests with the most data that is possible, even the stats of a speed of tests
- the tool can be combinated with Gitlab, Jira or Slack notifications of results from runs
- Results from this report is easy to read to all dev and also product people nad can quickly help to solving the issue, along with screenshots and videos from the tests


## 3 My vision of Automated tests
- I combinated two parts of tests that in the end works closely together
- First step for me is to check the page that I am workin on, to make sure that it has all main parts of the page. When it is a design page, then check every parts and it's lowest level. Also to check all headings as they are usually the most needed issues.
- When we check forms for example, control that every input has it's naming right and are visible those that should be.
-  When we talk about E2E they are mostly used as a regres tests, even that I want the test to do at least quick validation of inputs before I fill in forms. Then there should be also second part that I was not able to finish doing this assignment - I would need to login to database or the system that the data from the form is stored and control if the lead was really created, if the data is stored corectly with good values. To do this correctly I use as much faker and random inputs as it is possible to have unique data on every run of a test case. 
- 

## 4 How to run test cases 
- I am used to run my tests on Gitlab and use it's CI/CD pipelines
- By setup to prepare group of runs such as Check / Create or by definition of the app
- The jobs can be scheduled and also used to run on different environments, it can also be started by   anyone who has acces to the repository


## Guide how to check this tests without installing full dependencies
https://docs.cypress.io/guides/getting-started/installing-cypress#Direct-download 

