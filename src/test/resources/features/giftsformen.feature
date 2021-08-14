Feature: shopping products from gifts from men page

  Background:
    Given the customer is on the homePage

  Scenario: The customer checks the watches and buy any product
    When the customer navigates to gifts for men section
    And the customer clicks watches section
    And the customer clicks on desired item
    And the customer clicks add to cart button
    And the customer navigates to login page
    And the customer logged in with valid "email" and "password"
    And the customer clicks  card button
