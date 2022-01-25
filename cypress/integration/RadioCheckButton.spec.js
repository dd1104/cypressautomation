


describe('verify radio button and checkboxes',()=>{


    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('verify the functionality of checkbox with one select', ()=>{
        cy.get("input[value='option-1']").check().should('to.be.checked')
        cy.wait(5000)
        cy.get("input[value='option-1']").uncheck().should('not.be.checked')
    })

    it('verify functionality of checkbox with multiple select',()=>{
        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4']).should('to.be.checked')
        cy.wait(5000)
        cy.get('input[type="checkbox"]').uncheck(['option-1','option-2','option-3','option-4']).should('not.be.checked')
    })

    it('verify functionality of checkbox with click',()=>{
        cy.get('input[value="option-3"]').click().should('not.be.checked')
        cy.wait(2000)
        cy.get('input[value="option-3"]').click().should('to.be.checked')
        // or
        // cy.get('input[type="checkbox"]').eq(2).click().should('not.be.checked')
        // cy.get('input[type="checkbox"]').eq(2).click().should('be.checked')

    })

    it('verify the functionality of radio button check() function',()=>{
        cy.get('input[value="green"]').check().should('to.be.checked')
        cy.get('input[value="yellow"]').should('not.be.checked')

    })

    it('verify the functionality of radio button click() function',()=>{
        cy.get('input[value="blue"]').click().should('to.be.checked')
        cy.get('input[value="orange"]').should('not.be.checked')

    })

    it.only('verify the functionality of radio button click() function',()=>{
        cy.get('#radio-buttons').find('input').each(function(el){
            cy.wrap(el).click().should('to.be.checked')
            cy.wait(2000)
        });

    });

})