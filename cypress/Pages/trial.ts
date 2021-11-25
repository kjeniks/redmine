export default class Trial {
        
        el = {

                formNameLabel:'label[for="user_firstname"]',
                formNameInput:'input#user_firstname',
                formLastNameLabel:'label[for="user_lastname"]',
                formLastNameInput:'input#user_lastname',
                formPhoneLabel:'label[for="user_marketing_phone"]',
                formPhoneInput:'input#marketing_phone',
                formCompanyLabel:'label[for="user_company"]',
                formCompanyInput:'input#user_company',
                formLanguageLabel:'label[for="user_language"]',
                formLanguageSelect:'select#user_language',
                formRoleLabel:'label[for="user_easy_user_type_id"]',
                formRoleSelect:'select#user_easy_user_type_id',
                formCheckBoxGDPR:'#user_gdpr_consent_given',
                formSubmitButton:'button#submit_onboard_button_modal',
                avatarProfile: '#top-menu > #loggedas > span.avatar-container > a > img.gravatar.small',
                editProfileModal:'.ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.modal.ui-draggable',
                editProfileButton: '.button-positive.icon.icon-edit',
                editPassword:'input#user_password',
                editPasswordConfirm:'input#user_password_confirmation',
                saveEditButton: 'input.button-positive',

                login: 'input#username',
                logPassword: 'input#password',
                loginButton: 'button.f-form__btn-login'
    
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
                cy.wait('@firstLoginForm',{timeout:180000})
        }

        fillFirstLoginForm(person){
                cy.contains('Welcome! Finish the setup of your account.').should('be.visible')
                
                cy.get('#invited_colleague_onboard_modal').should('be.visible').within(()=>{
                        //General check of elements on modal 
                        cy.get(this.el.formNameLabel).contains('First name').should('be.visible')
                        cy.get(this.el.formNameInput).should('be.visible')
        
                        cy.get(this.el.formLastNameLabel).contains('Last name').should('be.visible')
                        cy.get(this.el.formLastNameInput).should('be.visible')
        
                        cy.get(this.el.formPhoneLabel).contains('Phone').should('be.visible')
                        cy.get(this.el.formPhoneInput).should('be.visible')
        
                        cy.get(this.el.formCompanyLabel).contains('Company').should('be.visible')
                        cy.get(this.el.formCompanyInput).should('be.visible')
        
                        cy.get(this.el.formLanguageLabel).contains('Language').should('be.visible')
                        cy.get(this.el.formLanguageSelect).should('be.visible')
        
                        cy.get(this.el.formRoleLabel).contains('My role').should('be.visible')
                        cy.get(this.el.formRoleSelect).should('be.visible')
        
                        cy.get(this.el.formCheckBoxGDPR).should('be.visible')
                        cy.get('.easy-invite-colleagues__gdpr-link').should('be.visible')
                        
        
                        cy.get(this.el.formNameInput).clear().type(person.name,{ delay: 50 })
                        cy.get(this.el.formLastNameInput).clear().type(person.surname,{ delay: 50 })
                        cy.get(this.el.formPhoneInput).clear().type(person.phone,{ delay: 50 })
                        cy.get(this.el.formLanguageSelect).select(person.language).wait(50)
                        cy.get(this.el.formRoleSelect).select(person.role,{force:true}).wait(50)
                        cy.get(this.el.formCheckBoxGDPR).check().wait(50)
                })
                cy.get(this.el.formSubmitButton).contains('Submit').should('be.visible')
                cy.get(this.el.formSubmitButton).click()

                //cy.contains('Thank you, your application is being set up. This might take few seconds.').should('be.visible')
                cy.get('.flash.notice',{timeout:60000}).contains('User data updated').should('be.visible',{timeout:60000})
        }
        editUserProfile(person){
                cy.get(this.el.avatarProfile).click()
                cy.get(this.el.editProfileModal).should('be.visible',{timeout:20000})
                cy.get(this.el.editProfileButton).should('be.visible').click()
                cy.get('.easy-content-page').should('be.visible').within(()=>{
                        cy.get('h2').contains(person.mail).should('be.visible')
                        cy.get(this.el.editPassword).type(person.password,{ delay: 50 })
                        cy.get(this.el.editPasswordConfirm).type(person.password,{ delay: 50 })
                        cy.get(this.el.saveEditButton).should('have.value','Save').click()
                })
                cy.get('.flash.error').contains('Your session has expired. Please login again.').should('be.visible')
        }
        loginwithNewPassword(person){
                cy.get(this.el.login).should('be.visible').type(person.mail,{ delay: 50 })
                cy.get(this.el.logPassword).should('be.visible').type(person.password,{ delay: 50 })
                cy.get(this.el.loginButton).click()
                cy.get('h2').contains(person.mail).should('be.visible')
        }
      
    }
    
    