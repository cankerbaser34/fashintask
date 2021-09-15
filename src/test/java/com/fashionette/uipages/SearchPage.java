package com.fashionette.uipages;

import com.fashionette.utilities.ConfigurationReader;
import com.fashionette.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchPage extends Base {

    public SearchPage() {

        PageFactory.initElements(Driver.get(ConfigurationReader.get("url")), this);

    }

    @FindBy(css = ".header__search-label")
    WebElement search_button;


    @FindBy(css = " input[placeholder='What are you looking for?'][name='q']")
    WebElement search_input;

    @FindBy(css = "img[title='Ted Baker, Croccon Croc Detail Large Icon Black']")
    WebElement item_bag;
    @FindBy(css = "a[title='Designers']")
    WebElement designers_page_button;

    @FindBy(css = "a[title='J.W.Anderson']")
    WebElement desired_customer_name;

    @FindBy(css = "img[title='J.W.Anderson, Small Chain Hobo Black']")
    WebElement selected_product;

    @FindBy(css = ".cart--header__button__icon.icon.icon--inline.icon--till")
    WebElement go_to_cart_button;


    public void click_search_button() {

        search_button.click();


    }

    public void type_word(String keyword) {

        search_input.sendKeys(keyword);

        Base.waitFor(4);
    }

    public void clickSelectedBag() {

        item_bag.click();
    }

    public void navto_designers_page() {

        designers_page_button.click();
    }

    public void click_desired_designer() {
        desired_customer_name.click();
    }

    public void click_selected_product() {
        Base.waitForClickablility(selected_product, 4);
        selected_product.click();
    }

    public void navto_cart_button() {

        go_to_cart_button.click();
    }

}


