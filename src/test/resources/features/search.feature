Feature: Search input

  Background:
    Given the customer is on the homePage

  Scenario:
    When the customer clicks search button
    And  the customer enters "keyword" to search

    Scenario: Search by designers
      When the customer clicks designers  button
      And the customer selects desired "designername"
      And the customer is selects one product of designer
      And the customer clicks add to cart button
