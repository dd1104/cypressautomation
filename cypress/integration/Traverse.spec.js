//Traversal Commands Cypress

//1.).children()

describe('traverse methods in cypress',()=>{

it('To get children of DOM elements, use the .children() command.',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('.traversal-drinks-list').children().should('have.length',5)
}) 
//2.) .eq()
it('To get DOM element of specific index, use the .eq() command.',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('.traversal-drinks-list').children().eq(2).should('have.text','Milk')
})
//3.) .first()
it('To get first DOM element within elements, use the .first() command.',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('.traversal-drinks-list').children().first().should('have.text','Coffee')
})
//4.) .last()
it('To get last DOM element within elements, use the .last() command.',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('.traversal-drinks-list').children().last().should('have.text','Sugar')
})
//5.) .next()
it('To get next sibling DOM element within elements, use the .next() command.',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('li[id="coffee"]').next().should('have.attr','id','tea')
})
//6.) .nextAll()
it('To get all of the next sibling DOM elements within elements, use the.nextAll() command',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('#tea').nextAll().should('have.length',3)
})

//7.) .nextUntil()
it('To get all of the next sibling DOM elements within elements until another element, use the.nextUntil() command',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('#tea').nextUntil('#sugar').should('have.length',2)
})

//8.) .prev()
it('To get the previous sibling DOM elements within elements , use the.prev() command',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('#espresso').prev().should('have.attr','id','milk')
})

//9.) .prevUntil()
it('To get all of the previous sibling DOM elements within elements until other elements , use the.prevUntil() command',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('#sugar').prevUntil('#coffee').should('have.length',3)
})

//10.) .prevAll()
it('To get all of the previous sibling DOM elements within elements , use the.prevAll() command',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('#sugar').prevAll().should('have.length',4)
})

//11.) .siblings()
it('To get all of the sibling DOM elements of elements , use the.siblings() command',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('#sugar').siblings().should('have.length',4)
})

//12.) .find()

it('To get descendant DOM elements of the selector, use the.find() command',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('nav[aria-label="breadcrumb"]').find('ol').find('li').should('have.length',3)
})

//13.).closest()
it.only('To get closest ancestor DOM element , use the .closest() command',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('#espresso').closest('ul').should('have.attr','class','traversal-drinks-list')
})

//14.).not()
it.only('To remove DOM element(s) from the set of elements, use the .not() command',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)
})

//15.).parent()
it.only('To get parent DOM element of elements, use the .parent() command',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('.traversal-mark').parent().should('have.contain','Lorem ipsum dolor sit amet, consectetur adipiscing elit')
})

//16.).parents()
it.only('To get parents DOM element of elements, use the .parents() command.',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('.traversal-mark').parents().should('have.class','thumbnail')

})

//17.).parentsUntil()
it.only('To get parents DOM element of elements until other element, use the .parentsUntil() command.',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('.traversal-mark').parentsUntil('.thumbnail').should('have.length',2)
})
})