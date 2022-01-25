describe('traverse methods in cypress',()=>{

    it('To get children of DOM elements, use the .children() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').eq(0).children().should('have.length',11)
    })
    
    it.only('To get children of DOM elements, use the .children() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-job-list').children().should('have.length',2)
    }) 
    it.only('To get children of DOM elements, use the .children() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.menu').children().should('have.length',3)
    }) 

    it.only('To get parent DOM element of elements, use the .parent() command',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('tbody').parent().should('have.attr','id','t01')
    })

    it.only('To get parents DOM element of elements, use the .parents() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.thumbnail').parents().should('have.class','col-sm-12')
    
    })

    it.only('To get parents DOM element of elements, use the .parents() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.row').parents().should('have.class','container')
    
    })

   
    
})
