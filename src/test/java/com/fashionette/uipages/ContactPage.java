package com.fashionette.uipages;

import com.fashionette.utilities.ConfigurationReader;
import com.fashionette.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ContactPage extends Base {


    public ContactPage() {

        PageFactory.initElements(Driver.get(ConfigurationReader.get("url")), this);


    }


    @FindBy(css = "a[title='Contact']")
    public WebElement contact_link_button;


    public void navToContact() {

        contact_link_button.click();
    }


}
