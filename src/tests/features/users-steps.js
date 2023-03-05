const { Given, When, Then } = require('cucumber')
const request = require('supertest')
const { expect } = require('chai')

let response
let createdUser
let app

// Initialize application
Given('the server is running', () => {
    app = require('../../../server')
})

// Get all users test
When('I request all users', async () => {
    response = await request(app).get('/users')
})

Then('the response should have status code {int}', (statusCode) => {
    expect(response.statusCode).to.equal(statusCode)
})

Then('the response body should contain an array of all users', () => {
    expect(response.body).to.be.an('array')
})

// Create a new user test
When('I create a new user with name {string} and email {string}', async (name, email) => {
    response = await request(app)
        .post('/users')
        .send({ name, email })
    createdUser = response.body
})

Then('the response body should contain the created user\'s ID, name and email', () => {
    expect(createdUser).to.have.property('id')
    expect(createdUser).to.have.property('name', 'John')
    expect(createdUser).to.have.property('email', 'john@example.com')
})
