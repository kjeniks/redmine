import urls from "@constants/urls"
import CareerPage from "@pages/career"
import Common from "@pages/common"
import faker from "faker"

const common = new Common()
const career = new CareerPage()

const person = {
    nameOK: faker.name.firstName() + " " +  faker.name.lastName(),
    mailOK: faker.name.lastName() + "@" + faker.lorem.words(1).toLowerCase() + ".com",
    textOK: faker.lorem.words(15),
    inputNOK1 : " ",
    inputNOK2 : faker.lorem.word(),
    inputNOK3 : faker.lorem.word() + ".cz",
    inputNOK4 : faker.lorem.word() + "@" + faker.lorem.words(1).toLowerCase(),
    inputNOK5 : faker.lorem.word() + "@" + faker.lorem.words(1).toLowerCase() + ".c",
}

describe('Create SalesChamp', () => {

    it('Apply for the backed role', () => { 
        cy.visit(urls.CAREERS.URL)
            .get(career.el.hotRolesButton).click().wait(200)
        cy.contains('Backend').parents(career.el.blockRoles).find(career.el.applyNowButton).click().wait(200)
        
        //Validation of inputs
        cy.get(career.el.formSend).click().wait(500)
        cy.get('input:invalid').should('have.length', 2)
        cy.get('textarea:invalid').should('have.length', 1)
        .reload()
        .get(career.el.inputName).type(person.inputNOK1)
        .get(career.el.inputMail).type(person.mailOK)
        .get(career.el.formSend).click().wait(500)
        .get('textarea:invalid').should('have.length', 1)
        .reload()
        .get(career.el.inputName).type(person.nameOK)
        .get(career.el.inputMail).type(person.inputNOK1)
        .get(career.el.formSend).click().wait(500)
        .get('input:invalid').should('have.length', 1)
        .reload()
        .get(career.el.inputText).type(person.textOK)
        .get(career.el.formSend).click().wait(500)
        .get('input:invalid').should('have.length', 2)
        .reload()
        //Validation of email form
        .get(career.el.inputText).type(person.textOK)
        .get(career.el.inputMail).type(person.inputNOK1)
        .get(career.el.formSend).click().wait(500)
        .get('input:invalid').should('have.length', 2)
        .reload()
        .get(career.el.inputName).type(person.nameOK)
        .get(career.el.inputText).type(person.textOK)
        .get(career.el.inputMail).type(person.inputNOK2)
        .get(career.el.formSend).click().wait(500)
        .get('input:invalid').should('have.length', 1)
        .reload()
        .get(career.el.inputName).type(person.nameOK)
        .get(career.el.inputText).type(person.textOK)
        .get(career.el.inputMail).type(person.inputNOK3)
        .get(career.el.formSend).click().wait(500)
        .get('input:invalid').should('have.length', 1)
        .reload()
        .get(career.el.inputName).type(person.nameOK)
        .get(career.el.inputText).type(person.textOK)
        .get(career.el.inputMail).type(person.inputNOK4)
        .get(career.el.formSend).click().wait(500)
        .get('input:invalid').should('have.length', 1)
        .reload()
        .get(career.el.inputName).type(person.nameOK)
        .get(career.el.inputText).type(person.textOK)
        .get(career.el.inputMail).type(person.inputNOK4)
        .get(career.el.formSend).click().wait(500)
        .get('input:invalid').should('have.length', 1)

        cy.log('VALIDACE OK')
        
        cy
        .get(career.el.inputName).type(person.nameOK)
        .get(career.el.inputMail).type(person.mailOK)
        .get(career.el.inputText).type(person.textOK)
        
        common.recapcha()   //RECAPCHA 
        cy.get(career.el.formSend).click().wait(1500)
        .get('w-form-done').contains('Thank you! Your submission has been received!').should('be.visible')

/*      
        NOTES
        - Current version of test will always fail as we are not able to go through the recapcha.
            Because of that we are not able to validate the "Thank you" note that is form sending as a confirmation.
        - I used only validation to imputs as they are now used in the form. There are few variants that would be nice to add:
            - longer string then 3 symbols in "name"
            - no special characters in name or email adress
            - there is a option to send "name"
            - you can now send an form with a mail that does't have .cz (or other ending) 
                - there should be validation that all emails has to have at least one "." in it
            
        
        2ND STEP VALIDATION OF LEAD
         To have the test fully valiable I would need to have acces to db or the system 
         that leads are sending to to verife that all input data went ok in correct format.
    
*/
    })    
})    