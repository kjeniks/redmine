import urls from "@constants/urls"
import CareerPage from "@pages/career"
import Common from "@pages/common"

const career = new CareerPage()
const common = new Common()

const job1 = "Node.js & PHP"
const job2 = "Frontend Developer"

describe('SalesChamp Check Test Part Carrer', () => {

    afterEach(()=>{
        common.checkHeader()
        common.checkFooter()
    })    

    it('Check Careers Page', () => { 
        cy.visit(urls.CAREERS.URL)
        
        .get(common.el.hottext).contains("We're hiring!").should('be.visible')
        .get(common.el.h1).contains("make an impact").should('be.visible')
        .get(career.el.paragraph1).contains("continue to do so").should('be.visible')
        .get(career.el.applyNowButton).contains("apply now").should('be.visible')
        .get(career.el.hotRolesButton).contains("ROLES").should('be.visible')
        
        .get(common.el.h2).contains("work perks").should('be.visible')
        .get(common.el.h4).contains("growth").should('be.visible')
        .get(common.el.h4).contains("impact").should('be.visible')
        .get(common.el.h4).contains("working").should('be.visible')
        .get(common.el.h4).contains("equipment").should('be.visible')
        .get(common.el.h4).contains("coffee").should('be.visible')
        .get(common.el.h4).contains("events").should('be.visible')
              
        .get('[alt="Presentations"]').should('be.visible')
        .get('[alt="Leads"]').should('be.visible')
        .get('[alt="Motivation"]').should('be.visible')
        .get('[alt="Insights"]').should('be.visible')
        .get('[alt="Map. "]').should('be.visible')
        .get('[alt="Agreements"]').should('be.visible')

        .get(common.el.h3).contains("mission").should('be.visible')
        .get(career.el.paragraph1).contains("digital").should('be.visible')
        .get(common.el.h3).contains("vision").should('be.visible')
        .get(career.el.paragraph1).contains("audience").should('be.visible')

        .get(common.el.h2).contains("Who we are").should('be.visible')
        .get(career.el.paragraph1).contains("of the sharpest").should('be.visible')
        .get(career.el.people).contains("Wienk").should('be.visible')
        .get(career.el.people).contains("Mochňak").should('be.visible')
        .get(career.el.people).contains("Zigo").should('be.visible')
        .get(career.el.people).contains("Králik").should('be.visible')
        .get(career.el.people).contains("Babjak").should('be.visible')
        .get(career.el.people).contains("Baštan").should('be.visible')
        .get(career.el.people).contains("Abass").should('be.visible')
        .get(career.el.people).contains("Parke").should('be.visible')

        .get(common.el.h2).contains("What we do").should('be.visible')
        .get(career.el.paragraph1).contains("Dutch Market").should('be.visible')

        .get(common.el.h3).contains("good contribution").should('be.visible')
        .get(career.el.paragraph1).contains("Netherlands to become").should('be.visible')
        .get(career.el.check).contains("statuses for every").should('be.visible')
        .get(career.el.check).contains("create teams").should('be.visible')

        .get(common.el.h3).contains("Where we are").should('be.visible')
        .get(career.el.paragraph2).contains("center of Brno").should('be.visible')
        .get(common.el.h3).contains("See The Netherlands").should('be.visible')
        .get(career.el.paragraph2).contains("visit our customers").should('be.visible')

        career.findJobOffer(job1)
        career.findJobOffer(job2)
        
        cy
        .get(common.el.h2).contains("Hungry to grow?").should('be.visible')
        .get(career.el.check).contains("always looking").should('be.visible')
        .get(career.el.check).contains("small group ").should('be.visible')
        .get(career.el.check).contains("help you set this").should('be.visible')
        .get(career.el.check).contains("your core skills").should('be.visible')
        .get(career.el.check).contains("will be clearly").should('be.visible')
        .get(career.el.check).contains(" your own work schedule").should('be.visible')

        .get(career.el.form)
                .find(career.el.paragraph2).contains("as soon as").should('be.visible')
        .parents(career.el.form).find(career.el.inputName)
        .siblings().contains('Name*')
        .parents(career.el.form).find(career.el.inputMail)
        .siblings().contains('Email Address*')
        .parents(career.el.form).find(career.el.inputText)
        .siblings().contains('Message*')
//      .parents(career.el.form).find(career.el.recapcha)
        .parents(career.el.form).find(career.el.formSend)      

    })
  })
