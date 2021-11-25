export default class Trial {
        
        el = {
                hottext: ".tag-hot-text",
                h1: "h1.heading-2",
                h2: "h2.heading-4",
                h3: "h3.heading-5",
                h410: "h4.heading-10",
                h4: "h4.heading-4",
                footer: ".footer-wrap",
                footerContext: ".footer-flex-container",
                logoFooter: "a.footer-logo-link",
                logoImg: "img.logo-image-2",
                navigation: ".navigation-items.sc-top-nav",
                logoHeader: "a.logo-link",
                menu: ".navigation-item-2",
                language: ".wg-element-wrapper.sw2"
    
        }
    
        basicCheckElementsTrial(){
                cy.get('.header').should('be.visible')
                .get('main.layout-main').should('be.visible')
                .get('div.topimage').should('be.visible')
                .get('div.iconbar').should('be.visible')
                .get('h2').contains('Most wanted Redmine features in one upgrade').should('be.visible')
                .get('h2').contains('Trusted worldwide').should('be.visible')
                .get('h2').contains('What users say about Easy Redmine on Capterra?').should('be.visible')
                .get('h2').contains('Easy Redmine Solutions').should('be.visible')
                .get('h2').contains('Redmine community').should('be.visible')
                .get('h2').contains('Easy Redmine case studies').should('be.visible')
                .get('h2').contains('Redmine blog & news').should('be.visible')
                .get('h2').contains('Try Easy Redmine in a 30-day free trial').should('be.visible')
                
        }  
        
        submitByMail(mail){
                cy.get('input#mauticform_input_trialrequest_email').should('be.visible')
                        .clear().type(mail)
                cy.get('button#mauticform_input_trialrequest_submit').click()
                cy.wait(10000)
        }
      
    }
    
    