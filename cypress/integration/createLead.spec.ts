import urls from "@constants/urls"

import Trial from "@pages/trial"
import faker from "faker"

const trial = new Trial()

const person = {
    name: 'QA',
    surname: 'Appliucant',
    phone: '+420222980481',
    language: 'English',
    mail: 'qa-applicant@easy.cz',
    password: 'qa-test'
    
}

describe('Start a trieal', () => {

    it('Start trial as a QA Applicant', () => { 
        cy.visit('/')
        //basic control of elements on page
        trial.basicCheckElementsTrial()
        trial.submitByMail(person.mail)
        //cy.contains('Your trial will be ready soon and you will be redirected into it.',{timeout:60000}).should('be.visible')
        cy.intercept('GET','assets/first_login_form*').as('firstLoginForm')
        cy.wait('@firstLoginForm',{timeout:500000})
        
    })    
})    