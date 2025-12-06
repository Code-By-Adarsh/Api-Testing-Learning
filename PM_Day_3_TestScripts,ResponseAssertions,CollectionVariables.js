//Endpoint: https://reqres.in/api/users/2

/*
This is my day 3 of learning api testing by postman. Today I am learning test scripts, response assertions and collection variables.
S : Simple
M : Medium
H : Hard
*/

// S-1
pm.test("Status code is 200",function(){
    pm.expect(pm.response.code).to.eql(200);
});

// M-1
pm.test("Status code is 200",function(){
    pm.expect(pm.response.code).to.eql(200);
});

pm.test("Response time is under the 1000ms",function(){
    pm.expect(pm.response.responseTime).to.be.below(1000);
    });

pm.test("Content-type is json",function(){
    pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
})

pm.test("User ID is 2",function(){
    let body = pm.response.json();
    pm.expect(body.data.id).to.eql(2);
})

// H-1
pm.test("First name is Janet",function(){
    let body = pm.response.json();
    pm.expect(body.data.first_name).to.eql("Janet");
});

pm.test("Last name is Weaver",function(){
    let body = pm.response.json();
    pm.expect(body.data.last_name).to.eql("Weaver");
});

pm.test("Avatar url is correct",function(){
    let body = pm.response.json();
    pm.expect(body.data.avatar).to.eql("https://reqres.in/img/faces/2-image.jpg");
});

// H-2
const body = pm.response.json();

pm.test("ID is number",function(){
    pm.expect(body.data.id).to.be.a("number");
});

pm.test("Email is string",function(){
    pm.expect(body.data.email).to.be.a("string");
});

pm.test("Avatar URL matched regex",function(){
    pm.expect(body.data.avatar).to.match(/^https?:\/\/.*\.(jpg|png)$/);
});

pm.test("Data object has all keys",function(){
    pm.expect(body.data).to.have.all.keys("id","email","first_name","last_name","avatar");
});

pm.test("Status code is 2xx",function(){
    pm.expect(pm.response.code).to.within(200,299);
});

pm.test("Response time < 500ms",function(){
    pm.expect(pm.response.responseTime).to.be.below(500);
});

// S-2
const body = pm.response.json();
pm.environment.set("userEmail",body.data.email);

// S-3
//body:
{
    "name":"{{userEmail}}",
    "job":"QA Tester"
}

//response:
{
    "name": "janet.weaver@reqres.in",
    "job": "QA Tester",
    "id": "545",
    "createdAt": "2025-12-06T19:05:04.271Z"
}

// M-2
const res = pm.response.json();
pm.collectionVariables.set("userId",res.id);

//body:
{
    "name":"Adarsh Mishra",
    "job": "QA Tester"
}

//response:
{
    "name": "Adarsh Mishra",
    "job": "QA Tester",
    "id": "50",
    "createdAt": "2025-12-06T19:03:52.444Z"
}
