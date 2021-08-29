export default class CareerPage {
        
        el = {
        
        paragraph1: "p.paragraph-bigger-2",
        paragraph2: "p.paragraph",
        applyNowButton: "a.button.w-inline-block",
        hotRolesButton: "a.button.careers-button",
        people: ".container.careers-cards",
        block: ".div-block.sc-card.slide-show",
        icon: ".image.feature-icons",
        check: ".checkmark",
        //Specific positions
        openPositions: ".open-positions",
        blockRoles: ".div-block.sc-card.roles",
        plusButton: ".button.career-card.accordion-button.w-button",        
        accordion: ".accordion-box.careers-accordion-mobile",
        applyButton: ".button.w-inline-block",
        hotRolesTag: ".hot-tag",
        //Form for applications
        form: ".careers-form",
        inputName: "input.text-field-2#Name---Careers",
        inputMail: "input.text-field-2#Email---Careers",
        inputText: "textarea.text-field-2#Careers-Message",
        recapcha: ".recaptcha-checkbox-border",
        formSend: ".button.form-button.w-button"        
        }

        findJobOffer(role : string){
        cy.get(this.el.openPositions).find(this.el.blockRoles).contains(role).should('be.visible')
                .parent(this.el.blockRoles).find(this.el.hotRolesTag).contains('HOT ROLES').should('be.visible')
                .parents(this.el.blockRoles).find(this.el.plusButton).click().wait(200)
                .parents(this.el.blockRoles).find(this.el.accordion).should('be.visible')
                .parents(this.el.blockRoles).find(this.el.applyButton).should('be.visible')
        }  
}

