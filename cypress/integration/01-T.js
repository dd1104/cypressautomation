// const cypress = require("cypress")
// const { it } = require("mocha")

describe('verify the login functionality', () => {
    it('test login with valid credentials', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id="txtUsername"]').type('Admin')
        cy.get('input[id="txtPassword"]').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('img[alt="OrangeHRM"]').should('be.visible')

    })


    it('test login with invalid credentials',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id="txtUsername"]').type('Admin')
        cy.get('input[id="txtPassword"]').type('admin1233')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('be.visible')
    })
    it('To get children of DOM elements, use the .find() .children() .last() command', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/') //open URL
        cy.get('input[name="txtUsername"]').type('Admin') // Selecting the element and entering the username
        cy.get('input[name="txtPassword"]').type('admin123')// Selecting the element and entering the password
        cy.get('#btnLogin').click()
        //Validation
        //cy.get('#welcome').should('have.text','Welcome Paul')
        cy.get('#welcome-menu').find('li').children().last().should('have.text', 'Logout')
})
})