Feature: Login functionality

  Background:
    Given the customer is on the homePage
    When the customer navigates to login page

  Scenario: Validate login functionality with correct credentials
    And the customer logged in with valid "email" and "password"
    Then Validate the customer logged in suscessfully.

    Scenario: Validate Page Heading, Page Title and Page URL of Login page
      And validate login page Title
      And validate login page url


    Scenario: Validate 'Forgotten Password' link is available in the Login page and is working
      Then Validate Forgotten Password link



  Scenario Outline: Validate the customer login functionality
    When the customer enters wrong   "<email>" and "<password>"
    Then Validate logging application with wrong credentials

    Examples:
      | email               | password        |
      | canker@yahoo.com    | !8Ntr*BM@!#G3VH |
      | the@fashiontette.de | rt35y46h46      |
      | QA@fashionette.de   | 25364u4etg      |



