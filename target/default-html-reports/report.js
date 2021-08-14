$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/purchase.feature");
formatter.feature({
  "name": "Add a product to the cart,login, modify user name and apply voucher",
  "description": "",
  "keyword": "Feature"
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
formatter.uri("file:src/test/resources/features/search.feature");
formatter.feature({
  "name": "Search input",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Simple search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the customer clicks search button",
  "keyword": "When "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.SearchStepDef.theCustomerClicksSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer enters \"keyword\" to search",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.SearchStepDef.theCustomerEntersToSearch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Search by designers",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the customer clicks designers  button",
  "keyword": "When "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.SearchStepDef.theCustomerClicksDesignersButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer selects desired \"designername\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.SearchStepDef.theCustomerSelectsDesired(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the customer is selects one product of designer",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.SearchStepDef.theCustomerIsSelectsOneProductOfDesigner()"
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
  "name": "the customer clicks  card button",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.SearchStepDef.theCustomerClicksCardButton()"
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
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d86.0.4240.75)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027cihan-Lenovo-IdeaPad-S540-15IML\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.4.0-80-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.75, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /tmp/.com.google.Chrome.czgxr4}, goog:chromeOptions: {debuggerAddress: localhost:45169}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3d8ab915d9ab641a67f094b43cce8a10\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy21.sendKeys(Unknown Source)\n\tat com.fashionette.uipages.VoucherPage.type_voucher(VoucherPage.java:47)\n\tat com.fashionette.stepDefinitions.VoucherSteps.theCustomerEntersValidAndClicksRedeemButton(VoucherSteps.java:25)\n\tat ✽.the customer enters valid \"coupon\" and clicks redeem  button(file:///home/cihan/Desktop/projects/Javamaven/fashinebdd/src/test/resources/features/search.feature:19)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});