

describe('verify the login functionality',()=>{

     beforeEach(()=>{
         cy.visit('https://opensource-demo.orangehrmlive.com/')
     })

     it('verify login fxnality',()=>{
        // cy.get('#txtUsername').type('Admin')
        // cy.get('#txtPassword').type('admin123')
        // cy.get('#btnLogin').click()
        cy.login("Admin",'admin123')
     })

     it('verify login fxnality using invalid credentials',()=>{
        // cy.get('#txtUsername').type('Admin')
        // cy.get('#txtPassword').type('123')
        // cy.get('#btnLogin').click()
        cy.login("Admin",'123')
     })
})