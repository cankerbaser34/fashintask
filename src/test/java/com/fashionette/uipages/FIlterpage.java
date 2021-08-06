package com.fashionette.uipages;

import com.fashionette.utilities.ConfigurationReader;
import com.fashionette.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FIlterpage {

    public FIlterpage() {

        PageFactory.initElements(Driver.get(ConfigurationReader.get("url")), this);

    }

    @FindBy(xpath = "//div[contains(text(),'Designers')]")
    public WebElement filter_designer;

    @FindBy(xpath = "//span[normalize-space()='Christian Louboutin']")
    public WebElement chirtan_lob_select;


    @FindBy(xpath = "//div[contains(text(),'Colours')]")
    public WebElement colors_button;

    @FindBy(xpath = "//span[normalize-space()='beige']")
    public WebElement beige_color;

    @FindBy(xpath = "//div[contains(text(),'Categories')]")
    public WebElement categories_button;

    @FindBy(xpath = "//div[contains(text(),'Sizes')]")
    public WebElement sizes;

    @FindBy(xpath = "//span[normalize-space()='Sandals']")
    public WebElement sandals;

    @FindBy(css = " div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1)")
    public WebElement sale_button;

    @FindBy(xpath = "//span[contains(text(),'New on sale')]")
    public WebElement new_on_sale;

    @FindBy(xpath = "//img[contains(@title,'Nougat Brown/Silver')]")
    public WebElement simple_bille;

    public void click_designerfilter() {
        Base.waitForClickablility(filter_designer, 4);
        filter_designer.click();
        chirtan_lob_select.click();
    }

    public void colorFilter() {
        colors_button.click();
        beige_color.click();
        Base.waitFor(2);

    }

    public void filter_categories_sandals() {
        Base.scrollDown(sizes);
        Base.waitForClickablility(categories_button, 3);
        categories_button.click();
        Base.waitForVisibility(sandals, 3);
        sandals.click();
    }

    public void filter_sale() {
        Base.waitForClickablility(sale_button, 3);
        sale_button.click();
        new_on_sale.click();

    }

    public void select_item() {
        Base.waitForClickablility(simple_bille, 3);
        simple_bille.click();

    }

}
