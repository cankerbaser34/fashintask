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
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027By.cssSelector: .cart--header__icons\u0027 (tried for 4 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat com.fashionette.uipages.Base.waitForClickablility(Base.java:68)\n\tat com.fashionette.uipages.Order_loginPage.nav_to_cart(Order_loginPage.java:124)\n\tat com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerClicksGoToCardButton(PurchaseLoginSteps.java:60)\n\tat ✽.the customer clicks go to card button(file:///home/cihan/Desktop/projects/Javamaven/fashinebdd/src/test/resources/features/purchase.feature:11)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".cart--header__icons\"}\n  (Session info: chrome\u003d86.0.4240.75)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027cihan-Lenovo-IdeaPad-S540-15IML\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.4.0-80-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.75, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /tmp/.com.google.Chrome.iLqsAg}, goog:chromeOptions: {debuggerAddress: localhost:34457}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2f4c394e5f261817647dc293b3f9b420\n*** Element info: {Using\u003dcss selector, value\u003d.cart--header__icons}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy21.isDisplayed(Unknown Source)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:670)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:666)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat com.fashionette.uipages.Base.waitForClickablility(Base.java:68)\n\tat com.fashionette.uipages.Order_loginPage.nav_to_cart(Order_loginPage.java:124)\n\tat com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerClicksGoToCardButton(PurchaseLoginSteps.java:60)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:74)\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:65)\n\tat org.testng.TestRunner$1.run(TestRunner.java:652)\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1541)\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:843)\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:681)\n\tat org.testng.TestRunner.run(TestRunner.java:585)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\n\tat org.testng.TestNG.run(TestNG.java:1007)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:135)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:198)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:146)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:377)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:138)\n\tat org.apache.maven.surefire.booter.ForkedBooter.run(ForkedBooter.java:465)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:451)\n",
  "status": "failed"
});
formatter.step({
  "name": "the price of and name of  product verified",
  "keyword": "Then "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.thePriceAndNameOfProductsVerified()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
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