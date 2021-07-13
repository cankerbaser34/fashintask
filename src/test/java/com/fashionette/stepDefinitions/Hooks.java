package com.fashionette.stepDefinitions;
import com.fashionette.uipages.Base;
import com.fashionette.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class Hooks {

    @Before
    public void setUp() {
        Base.clearCookies();
    }

    @After
    public void tearDown(Scenario scenario) {

        if (scenario.isFailed()) {

            final byte[] screenshot = ((TakesScreenshot) Driver.get("url")).getScreenshotAs(OutputType.BYTES);

            scenario.attach(screenshot, "image/png", "screenshot");

        }

        Driver.closeDriver();

    }


}
