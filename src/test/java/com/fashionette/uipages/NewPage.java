package com.fashionette.uipages;

import com.fashionette.utilities.ConfigurationReader;
import com.fashionette.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class NewPage extends Base {


    public NewPage() {
        PageFactory.initElements(Driver.get(ConfigurationReader.get("url")), this);

    }


    @FindBy(xpath = "//a[@title=\"New\"]")
    WebElement newPage;


    public void navToNewPage() {

        newPage.click();

        Base.waitFor(3);
    }


}
