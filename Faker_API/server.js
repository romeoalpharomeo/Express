const express = require("express");
const app = express();
const port = 8000;
var faker = require("faker");

class User {
    constructor() {
        this._id = 1;
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = 1,
        this.name = faker.company.companyName();
        this.address = [
            faker.address.streetAddress(),
            faker.address.city(),
            faker.address.state(),
            faker.address.zipCode(),
            faker.address.country(),
        ];
    }
}

app.get("/api", (req,res)=>{
    res.json({message: "Hey this works."})
})

app.get("/api/users/new", (req,res)=>{
    res.json(new User())
})

app.get("/api/companies/new", (req,res)=>{
    res.json(new Company())
})

app.get("/api/users/company", (req,res)=>{
    res.json([new Company(), new User()])
})

app.listen(port, () => console.log(`Running on ${port}`))