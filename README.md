  
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

