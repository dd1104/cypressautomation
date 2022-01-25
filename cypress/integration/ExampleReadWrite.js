
describe('verify read and write operation',()=>{

    it('verify the write functionality', ()=>{
        cy.writeFile('textTwo.txt','I am new to Cypress \n')
        cy.writeFile('textTwo.txt','Hello I am new to JavaScript',{flag:'a+'})

    })

    it('verify the read functionality',()=>{
        cy.readFile('textTwo.txt').should('exist')
        cy.readFile('textTwo.txt').should('exist').should('contain',"I am new to Cypress")
    })

    it('verify the functionality to write json file',()=>{
        cy.writeFile('cypress/fixtures/sample.json',{
            fullName:"Deeksha D",
            age:21,
            rollNumber:23
        })

    })
    it('verify the functionaliy for read json file',()=>{
        cy.fixture('sample').then(function(response){
            cy.log(response)
        })

    })
    it('verify the get functionality',()=>{

        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then(function(response){
            console.log(response.body.data)
            response.body.data.forEach(element => {
                cy.writeFile('cypress/fixtures/sample.json',element,{flag:'a+'})
                cy.writeFile('cypress/fixtures/sample.json',",",{flag:'a+'})
            });
            
            cy.writeFile('cypress/fixtures/sample2.json',response.body.data)

        })
    })
    it('verify the get functiobnality',()=>{
        cy.fixture("sample2").then((response)=>{
            cy.log(response)
        })
        
    })

})