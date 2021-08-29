export default class Common {
        
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

        checkHeader(){
        cy
        .get(this.el.navigation)
                .find(this.el.logoImg).should('be.visible')
        .get(this.el.navigation)
                .find(this.el.menu).contains("Careers").should('be.visible')
        .get(this.el.navigation)
                .find(this.el.menu).contains("pricing").should('be.visible')
        .get(this.el.navigation)
                .find(this.el.menu).contains("contact us").should('be.visible')
        .get(this.el.navigation)
                .find(this.el.language).contains("EN").should('be.visible')
        .get(this.el.navigation)
                .find(this.el.language).contains("NL").should('be.visible')
        }  
        
        checkFooter(){
        cy
        .get(this.el.footer)
                .find(this.el.h2).contains('Communicate like a champion').should('be.visible')
        .get(this.el.footerContext).find(this.el.logoFooter).should('be.visible')
        .get(this.el.footerContext).contains('CONTACT DETAILS').should('be.visible')
        .get(this.el.footerContext).contains('heemstede').should('be.visible')
        .get(this.el.footerContext).contains('BRNO office').should('be.visible')
        .get(this.el.footerContext).find('a').contains('VAT no. NL854454986B01').should('be.visible')

        }  
        
        recapcha(){
        cy.get('iframe')
                .first()
                .its('0.contentDocument.body')
                .should('not.be.undefined')
                .and('not.be.empty')
                .then(cy.wrap)
                .find('#recaptcha-anchor')
                .should('be.visible')
                .click()
        }
}

