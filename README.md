#Fashionette’s automated tests code challenge  with Cucumber Framework and Selenium

This is a simple automation testing project which automate the workflow of purchasing one item ,adding to card, login on
(https://www.fashionette.co.uk/) with
Cucumber and Selenium Web driver,executing by Junit, based on BDD framework.

##Usage and set up
###Environment
- Have a JDK installed
- Have a Maven installed and available on your PATH or IDE
- Intellij or Eclipse

### Important notes for import and quick start
- You can copy project from GitHub page or using git clone command from terminal.
- You  need to reload the project  before you run the test to download all dependencies
  in pom.xml file, or you can use **mvn install**.
- To get cucumber html report you should run with verify button under maven lifecycle part or simply
  from terminal with **mvn verify** command.
- To clear target file for reports you simply run **mvn  clean** command.
- For shortcut, you can run two commands together: **mvn clean verify**.
- You can find fancy cucumber html report under target/myReports named overview-features.html and open with preferable browser.
- You may  need to change tags to run tests in Runner java file, or you can add more than one tags.
  tags = {@tag1,@tag2}
  
```@CucumberOptions(
  plugin = {"json:target/cucumber.json",
  "html:target/default-html-reports",
  "rerun:target/rerun.txt"
  },
  features = "src/test/resources/features",
  glue = "com/fashionette/stepDefinitions",
  dryRun = false,
  tags = "@purchase"
  ) 
  ```  

