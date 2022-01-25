


describe('verfiy the function for table',()=>{

    it('verify the 1st table',()=>{
        let total=0
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').find('tbody').children().each(function(row,index){
           
            if(index != 0){
                total=total+Number(row.children().eq(2).text())
            }
        }).then(()=>{
            expect(total).to.eq(159)
        })
    })

    it('verify the 2nd table',()=>{
        let total=0
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t02').find('tbody').children().each(function(row,index){
            if(index != 0){
                total=total+Number(row.children().eq(2).text())
            }
        }).then(()=>{
            expect(total).to.eq(163)
        })
    })
})