

describe('validate four basic API',()=>{
it('validating the GET request',()=>{
    cy.request({
        method:"GET",
        url:"https://reqres.in/api/users?page=2"
    }).then(function(response){
        expect(response.status).to.eq(200)
    })
})

it('validating the POST request',()=>{
    cy.request({
        method:"POST",
        url:"https://reqres.in/api/users",
        body:{
                "name": "Deeksha",
                "job": "Tester"
        }
    }).then(function(response){
        expect(response.status).to.eq(201)
    })
})

it('validating the PUT request',()=>{
    cy.request({
        method:"PUT",
        url:"https://reqres.in/api/users/2",
        body:{
            "name": "Deeksha DT",
            "job": "zion resident"
        }
    }).then(function(response){
        expect(response.status).to.eq(200)
    })
})
    it('validating the DELETE request',()=>{
        cy.request({
            method:"DELETE",
            url:"https://reqres.in/api/users/2",
        }).then(function(response){
            expect(response.status).to.eq(204)
        })
})

})