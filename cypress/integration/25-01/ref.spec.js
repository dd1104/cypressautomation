//minimize the line of code using reference



describe('verify the function for table',()=>{
    
    function validateTable(id,expected){
        let total=0
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get(`#${id}`).find('tbody').children().each(function(row,index){
            if (index !=0){
                total=total+ Number(row.children().eq(2).text())
            }
        }).then(function(){
            expect(total).to.eq(expected)
        })

    }
    it('validate 1st table',()=>{
        validateTable('t01',159)
    })
    it('validate 2nd table',()=>{
        validateTable('t02',163)
    })
})







