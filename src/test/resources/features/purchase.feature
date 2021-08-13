
Feature: Add a product to the cart,login, modify user name and apply voucher

  Scenario: Customer can purchase
    Given the customer is on the homePage
    When the customer navigates to shoes page to see available shoes
    And the customer selects desired item
    And the customer clicks add to cart button
    And the customer navigates to login page
    And the customer logged in with valid "email" and "password"
    And the customer clicks go to card button
    Then the price of and name of  product verified

 @modify
 @smoke
  Scenario: Modify user information
    Given the customer is on the homePage
    When the customer navigates to login page
    And the customer logged in with valid "email" and "password"
    And the customer navigates to personal data section
    And the customer clicks edit button to make changes
    And the customer selects Mr box as a title
    And the customer modifies first and last name and save changes
    Then it is verified that changes were applied correctly

  @voucher
  Scenario: Apply a voucher
    Given the customer is on the homePage
    When the customer navigates to shoes page to see available shoes
    And the customer selects desired item
    And the customer clicks add to cart button
    And the customer clicks go to card button
    And the customer clicks voucher section
    And the customer enters valid "coupon" and clicks redeem  button
    Then it is verified that voucher applied correctly











