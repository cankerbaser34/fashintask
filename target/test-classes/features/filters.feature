@smoke
Feature: Check the filters functionality

  Background:
    Given the customer is on the homePage
    When the customer navigates to shoes page to see available shoes

    Scenario: Filtering different fields
      Then the customer filters designers
      Then the customer filters color of the product
      And the customer filters categories
      And the customer filters sales
      And  the customer selects desired sandal
      And the customer clicks add to cart button
      And the customer navigates to login page
      And the customer logged in with valid "email" and "password"
      And the customer clicks go to card button

