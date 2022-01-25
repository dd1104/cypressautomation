//READ WRITE JSON

//Write

describe('verify the read & write operation', () => {

    it('verify the write function', () => {
        cy.writeFile('textOne.txt', "Learning Javasript & Cypress \n")
        cy.writeFile('textOne.txt', "Hello", { flag: 'a+' })
    })
//Flag: is used to append content to end of the file.

    it('verify the read function',()=>{
        cy.readFile('textOne.txt').should('exist').and('contain',"Hello")
        cy.readFile('textOne.txt').should('contain',"Hello")
    })

    it('verify the write json function',()=>{
        cy.writeFile('cypress/fixtures/user.json',{
            "fullName": "Deeksha Datyal",
            "age":12,
            "rollNo.":34
        })
    })

    it('verify the read json Function',()=>{
        cy.fixture("user").then((response)=> {
            cy.log(response)
        })
    })

})

