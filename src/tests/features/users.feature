Feature: Users Management API

Scenario: Retrieve all users
  Given the server is running
  When I request all users
  Then the response should have status code 200
  And the response body should contain an array of all users

Scenario: Create a new user
  Given the server is running
  When I create a new user with name "John" and email "john@example.com"
  Then the response should have status code 200
  And the response body should contain the created user's ID, name and email

