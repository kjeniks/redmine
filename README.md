## E2E-testing project for Easy Redmine

## Tests are here
- remine/cypress/integration/createNewTrial.spec.ts 

## Note
Nalezen trabl -> z největší pravděpodobností týkající se recapchy, který nedovoluje průchod ve 100% případů do systému (dashboardu s firstLoginForm) ale přesměrovává rovnou na login page.
Přes tento problém se mi v ramci produkčního systému nepodařilo dostat, neboť cypress nemá žádnou (mě známou) cestu jak obcházet recapchu.

## Guide how to check this tests without installing full dependencies
https://docs.cypress.io/guides/getting-started/installing-cypress#Direct-download 

