package com.fashionette.uipages;

import com.fashionette.utilities.ConfigurationReader;
import com.fashionette.utilities.Driver;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class Base {

    public static void clearCookies() {

        Driver.get(ConfigurationReader.get("url")).manage().deleteAllCookies();
    }

    public static void scrollDown(WebElement link) {

        try {

            Thread.sleep(2000);

        } catch (Exception e) {


            JavascriptExecutor javascriptExecutor = (JavascriptExecutor) Driver.get(ConfigurationReader.get("url"));
            javascriptExecutor.executeScript("arguments[0]scrollIntoView(true)", link);

        }
    }

    public static void waitFor(int seconds) {
        try {
            Thread.sleep(seconds * 1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void alert_accept() {
        Alert alert = Driver.get(ConfigurationReader.get("url")).switchTo().alert();
        alert.accept();
    }


    public static void waitForPageToLoad(long timeOutInSeconds) {
        ExpectedCondition<Boolean> expectation = new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver driver) {
                return ((JavascriptExecutor) driver).executeScript("return document.readyState").equals("complete");
            }
        };
        try {
            WebDriverWait wait = new WebDriverWait(Driver.get(ConfigurationReader.get("url")), timeOutInSeconds);
            wait.until(expectation);
        } catch (Throwable error) {
            error.printStackTrace();
        }
    }

    public static WebElement waitForClickablility(WebElement element, int timeout) {
        WebDriverWait wait = new WebDriverWait(Driver.get(ConfigurationReader.get("url")), timeout);
        return wait.until(ExpectedConditions.elementToBeClickable(element));
    }


    public static WebElement waitForVisibility(WebElement element, int timeToWaitInSec) {
        WebDriverWait wait = new WebDriverWait(Driver.get(ConfigurationReader.get("url")), timeToWaitInSec);
        return wait.until(ExpectedConditions.visibilityOf(element));




    }


}
