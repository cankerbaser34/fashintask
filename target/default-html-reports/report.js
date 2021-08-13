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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"a[title\u003d\u0027Hugo, Match Slid Open Miscellaneous\u0027] div[itemprop\u003d\u0027brand\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.75)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027cihan-Lenovo-IdeaPad-S540-15IML\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.4.0-80-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.75, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /tmp/.com.google.Chrome.2AYzid}, goog:chromeOptions: {debuggerAddress: localhost:33551}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: c6c80f3dd9e5bedce85eb7def71201c3\n*** Element info: {Using\u003dcss selector, value\u003da[title\u003d\u0027Hugo, Match Slid Open Miscellaneous\u0027] div[itemprop\u003d\u0027brand\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\n\tat com.fashionette.uipages.Order_loginPage.sel_item(Order_loginPage.java:82)\n\tat com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerSelectsOneShoesNamed(PurchaseLoginSteps.java:28)\n\tat ✽.the customer selects desired item(file:///home/cihan/Desktop/projects/Javamaven/fashinebdd/src/test/resources/features/purchase.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "the customer clicks add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerClickAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the customer navigates to login page",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerNavigatesToLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the customer logged in with valid \"email\" and \"password\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerLoggedInWithValidAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the customer clicks go to card button",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerClicksGoToCardButton()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d86.0.4240.75)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027cihan-Lenovo-IdeaPad-S540-15IML\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.4.0-80-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.75, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /tmp/.com.google.Chrome.sDEMoy}, goog:chromeOptions: {debuggerAddress: localhost:41045}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 84394c19a993c68bec3989054946697f\n*** Element info: {Using\u003dcss selector, value\u003ddiv[class\u003d\u0027account-personaldata\u0027] a[class\u003d\u0027account__headline font-h1\u0027]}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy21.toString(Unknown Source)\n\tat java.base/java.lang.String.valueOf(String.java:2951)\n\tat java.base/java.lang.StringBuilder.append(StringBuilder.java:168)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.toString(ExpectedConditions.java:683)\n\tat java.base/java.lang.String.valueOf(String.java:2951)\n\tat java.base/java.lang.StringBuilder.append(StringBuilder.java:168)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:268)\n\tat com.fashionette.uipages.Base.waitForClickablility(Base.java:66)\n\tat com.fashionette.uipages.PersonalData.nav_to_persondata(PersonalData.java:46)\n\tat com.fashionette.stepDefinitions.PersonalDataEditSteps.theCustomerNavigatesToPersonalDataSection(PersonalDataEditSteps.java:14)\n\tat ✽.the customer navigates to personal data section(file:///home/cihan/Desktop/projects/Javamaven/fashinebdd/src/test/resources/features/purchase.feature:20)\n",
  "status": "failed"
});
formatter.step({
  "name": "the customer clicks edit button to make changes",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PersonalDataEditSteps.theCustomerClickEditButtonToMakeChanges()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the customer selects Mr box as a title",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PersonalDataEditSteps.theCustomerSelectsMrBoxAsATitle()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the customer modifies first and last name and save changes",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PersonalDataEditSteps.theCustomerModifiesFirstAndLastName()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it is verified that changes were applied correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PersonalDataEditSteps.itIsVerifiedThatChangesWereAppliedCorrectly()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d86.0.4240.75)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027cihan-Lenovo-IdeaPad-S540-15IML\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.4.0-80-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.75, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /tmp/.com.google.Chrome.sDEMoy}, goog:chromeOptions: {debuggerAddress: localhost:41045}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 84394c19a993c68bec3989054946697f\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat com.fashionette.stepDefinitions.Hooks.tearDown(Hooks.java:22)\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d86.0.4240.75)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027cihan-Lenovo-IdeaPad-S540-15IML\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.4.0-80-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.75, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /tmp/.com.google.Chrome.sDEMoy}, goog:chromeOptions: {debuggerAddress: localhost:41045}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 84394c19a993c68bec3989054946697f\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:694)\n\tat com.fashionette.uipages.Base.clearCookies(Base.java:18)\n\tat com.fashionette.stepDefinitions.Hooks.setUp(Hooks.java:14)\n",
  "status": "failed"
});
formatter.step({
  "name": "the customer is on the homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerIsOnTheHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the customer navigates to shoes page to see available shoes",
  "keyword": "When "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerNavigatesToPageToSeeAvailableShoes()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the customer selects desired item",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerSelectsOneShoesNamed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the customer clicks add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerClickAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the customer clicks go to card button",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.PurchaseLoginSteps.theCustomerClicksGoToCardButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the customer clicks voucher section",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.VoucherSteps.theCustomerClicksVoucherSection()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the customer enters valid \"coupon\" and clicks redeem  button",
  "keyword": "And "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.VoucherSteps.theCustomerEntersValidAndClicksRedeemButton(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it is verified that voucher applied correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "com.fashionette.stepDefinitions.VoucherSteps.itIsVerifiedThatVoucherAppliedCorrectly()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d86.0.4240.75)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027cihan-Lenovo-IdeaPad-S540-15IML\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.4.0-80-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.75, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /tmp/.com.google.Chrome.sDEMoy}, goog:chromeOptions: {debuggerAddress: localhost:41045}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 84394c19a993c68bec3989054946697f\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat com.fashionette.stepDefinitions.Hooks.tearDown(Hooks.java:22)\n",
  "status": "failed"
});
});