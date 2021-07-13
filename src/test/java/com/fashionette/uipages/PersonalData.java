package com.fashionette.uipages;

import com.fashionette.utilities.ConfigurationReader;
import com.fashionette.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PersonalData extends Base {


    String name, surname;

    public PersonalData() {

        PageFactory.initElements(Driver.get(ConfigurationReader.get("url")), this);

    }

    @FindBy(css = "div[class='account-personaldata'] a[class='account__headline font-h1']")
    public WebElement personal_data_section;

    @FindBy(css = ".account--address__action.account--address__action--update")
    public WebElement edit_button;

    @FindBy(css = "input[value='Mr']")
    public WebElement mr_title;

    @FindBy(css = "input[placeholder='First name']")
    public WebElement firstname_input;

    @FindBy(css = "input[placeholder='Surname']")
    public WebElement lastname_input;

    @FindBy(css = ".account--address__action.account--address__action--save")
    public WebElement save_button;

    @FindBy(xpath = "//body[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[2]/div[1]/div[1]/div[1]/div[1]/div[2]")
    public WebElement info_text;


    public void nav_to_persondata() {

        waitForClickablility(personal_data_section,4);
        scrollDown(personal_data_section);
        personal_data_section.click();
    }

    public void click_edit_button() {
        edit_button.click();

    }


    public void select_title() {
        mr_title.click();


    }

    public void edit_fullname() {

        name = "Canker";
        surname="Baser";
        firstname_input.click();
        firstname_input.clear();
        firstname_input.sendKeys(name);
        firstname_input.sendKeys(Keys.TAB);
        lastname_input.sendKeys(Keys.DELETE);
        lastname_input.sendKeys(surname);
        save_button.click();
        waitFor(1);

       waitForVisibility(info_text,6);
        getTextofReport();

    }


    public String getTextofReport() {
        return info_text.getText().replaceAll(" ","");

    }

    public String sur_name() {

        int indexOfAmount = getTextofReport().indexOf("28.06.1984");
        String sur_name = getTextofReport().substring(getTextofReport().indexOf("Baser"), indexOfAmount).trim();
        System.out.println(sur_name);
        return sur_name;
    }

    public String first_name() {

        int indexOfAmount = getTextofReport().indexOf("Baser");
        String fir_name = getTextofReport().substring(getTextofReport().indexOf("Mr"), indexOfAmount).trim();
       String first_name= fir_name.replace("Mr","");
        System.out.println(first_name);
        return first_name;
    }

    public void assert_name(){

        Assert.assertEquals(name,first_name());
        Assert.assertEquals(surname,sur_name());
    }


}


