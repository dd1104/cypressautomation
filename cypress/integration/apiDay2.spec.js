
describe('validating the post API',()=>{

    it('validate the GET api and count the no. of users',()=>{
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users?page=2'
        }).then(function(response){
            //cy.log(response)
            expect(response['body']['per_page']).to.eq(response['body']['data'].length)
        })
    })

    it('validate properties for multiple users',()=>{
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users?page=2'
        }).then(function(response){
            response.body.data.forEach(element => {
                // expect(element).to.have.property('email')
                // expect(element).to.have.property('id')
                // expect(element).to.have.property('first_name')
                // expect(element).to.have.property('last_name')
                // expect(element).to.have.property('avatar')
                expect(element).to.have.all.keys('email','id','first_name','last_name','avatar')
            });
        })
    })
    
    it('validate properties for multiple users',()=>{

        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users?page=2'
        }).then(function(response){
            expect(response.body.data[0] ['email']).to.eq("michael.lawson@reqres.in")
        })
    })

    it.only('validate the response body for user create api',()=>{

        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
            body:{
                "name": "Deeksha",
                "job": "Tester"
            }
        }).then(function(response){
            cy.log(response)
             //expect(response.status).to.eq(201)  
             expect(response.body).to.have.all.keys('id','name','job','createdAt')
             expect(response.duration).to.be.within(300,800)
        })
    })
})