$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/purchase.feature");
formatter.feature({
  "name": "Add a product to the cart,login, modify user name and apply voucher",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Customer can purchase",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the customer is on the homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerIsOnTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer navigates to shoes page to see available shoes",
  "keyword": "When "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerNavigatesToPageToSeeAvailableShoes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer selects desired item",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerSelectsOneShoesNamed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer clicks add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerClickAddToCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer navigates to login page",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerNavigatesToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer logged in with valid \"email\" and \"password\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerLoggedInWithValidAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer clicks go to card button",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerClicksGoToCardButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the price of and name of  product verified",
  "keyword": "Then "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.thePriceAndNameOfProductsVerified()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Modify user information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@modify"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the customer is on the homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerIsOnTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer navigates to login page",
  "keyword": "When "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerNavigatesToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer logged in with valid \"email\" and \"password\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerLoggedInWithValidAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer navigates to personal data section",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PersonalDataEditSteps.theCustomerNavigatesToPersonalDataSection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer clicks edit button to make changes",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PersonalDataEditSteps.theCustomerClickEditButtonToMakeChanges()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer selects Mr box as a title",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PersonalDataEditSteps.theCustomerSelectsMrBoxAsATitle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer modifies first and last name and save changes",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PersonalDataEditSteps.theCustomerModifiesFirstAndLastName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it is verified that changes were applied correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PersonalDataEditSteps.itIsVerifiedThatChangesWereAppliedCorrectly()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Apply a voucher",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@voucher"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the customer is on the homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerIsOnTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer navigates to shoes page to see available shoes",
  "keyword": "When "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerNavigatesToPageToSeeAvailableShoes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer selects desired item",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerSelectsOneShoesNamed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer clicks add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerClickAddToCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer clicks go to card button",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerClicksGoToCardButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer clicks voucher section",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.VoucherSteps.theCustomerClicksVoucherSection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer enters valid \"coupon\" and clicks redeem  button",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.VoucherSteps.theCustomerEntersValidAndClicksRedeemButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "it is verified that voucher applied correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.VoucherSteps.itIsVerifiedThatVoucherAppliedCorrectly()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});