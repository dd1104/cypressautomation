//GO REST API==>With bearer tocken

//VERIFY THE COMPLETE SCENARIO OF 1. CREATE USER 2. RETRIVE USER 3. UPDATE USER 4. DELETEUSER

describe('Verify all Go Rest Api request',()=>{

    //TO CREATE RANDOM EMAIL ADDRESS
    function generateEmail(){
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
        for(var ii=0; ii<15; ii++){
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return string + '@gmail.com';
        // Generates a random "Gmail"
    }     
//====================================================================================

        //CREATE NEW USER(POST)
    it('Verify the Create User functionality',()=>{
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v1/users',
            headers:{
                Authorization:"Bearer 0c165b49e70223fd88a78cffc3d9557944ee9ec7ba8237f68d420787d93504cf"
            },
            body: {
                "name": "Deeksha D",
                "email": generateEmail(),
                "gender": "female",
                "status": "active"
              }
        }).then(function(response){
            //cy.log(response)
            expect(response.status).to.equal(201)
            expect(response.body.data).to.have.property('id')
            return response.body.data['id']  

        }).then(function(id){
            //RETRIVE THE USER(GET)
            cy.request({
                method:'GET',
                url:`https://gorest.co.in/public/v1/users/${id}`,
                headers:{
                    Authorization:"Bearer 0c165b49e70223fd88a78cffc3d9557944ee9ec7ba8237f68d420787d93504cf"
                }
            }).then(function(response){
                expect(response.status).to.equal(200)
                return id
            
            }).then(function(id){
                //UPDATE THE USER(PUT)
                cy.request({
                    method:'PUT',
                    url:`https://gorest.co.in/public/v1/users/${id}`,
                    headers:{
                        Authorization:"Bearer 0c165b49e70223fd88a78cffc3d9557944ee9ec7ba8237f68d420787d93504cf"
                    },
                    body:{
                            "name": "Sanshi V",
                            "email": generateEmail(),
                            "gender": "female",
                            "status": "inactive",
                            "lang":"Hindi"
                    }
                }).then(function(response){
                //cy.log(response) //Async
                expect(response.status).to.be.eq(200)//Sync
                return id
                })
            }).then(function(id){
                //DELETE THE USER(DELETE)
                cy.request({
                    method:'DELETE',
                    url:`https://gorest.co.in/public/v1/users/${id}`,
                    headers:{
                        Authorization:"Bearer 0c165b49e70223fd88a78cffc3d9557944ee9ec7ba8237f68d420787d93504cf"
                    }
                }).then(function(response){
                    expect(response.status).to.be.eq(204)
                })
            })
        })
    })
})