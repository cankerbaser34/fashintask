Feature: Search input

  Background:
    Given the customer is on the homePage
  @smoke
  Scenario: Simple search
    When the customer clicks search button
    And  the customer enters "keyword" to search
  @smoke
  Scenario: Search by designers
    When the customer clicks designers  button
    And the customer selects desired "designername"
    And the customer is selects one product of designer
    And the customer clicks add to cart button
    And the customer navigates to login page
    And the customer logged in with valid "email" and "password"
    And the customer clicks  card button
    And the customer clicks voucher section
    And the customer enters valid "coupon" and clicks redeem  button

