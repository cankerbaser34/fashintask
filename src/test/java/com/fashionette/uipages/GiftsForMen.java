package com.fashionette.uipages;

import com.fashionette.utilities.ConfigurationReader;
import com.fashionette.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class GiftsForMen extends Base {

    public GiftsForMen() {

        PageFactory.initElements(Driver.get(ConfigurationReader.get("url")), this);

    }


    @FindBy(css = "div[class='header__navigation'] li[data-id='gifts for men']")
    WebElement gift_for_men_button;


    @FindBy(css = "img[title='Watches']")
    WebElement watches_button;

    @FindBy(css = "div[class='product-list-top product-list-top--sticky'] div[class='product-list-top__sorting']")
    WebElement filter_button;

    @FindBy(css = "div[class='sticky-product-list-top container'] li:nth-child(1)")
    WebElement price_ascending;

    @FindBy(css = "a[title='Diesel, Baby Chief Digital Stainless Steel Watch Gold-Tone']")
    WebElement desired_watched;

    public void navtoGiftsForMan() {

        gift_for_men_button.click();
    }

    public void navToWatches() {

        Base.waitForClickablility(watches_button, 4);
        watches_button.click();

    }

    public void priceAscendingFilter() {

        Base.waitFor(3);
        filter_button.click();
        Base.waitForVisibility(price_ascending, 4);
        price_ascending.click();

    }
    public void clickDesiredWatch(){
        Base.waitForClickablility(desired_watched,40);
        desired_watched.click();;
    }
}
