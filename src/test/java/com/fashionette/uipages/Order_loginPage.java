package com.fashionette.uipages;

import com.fashionette.utilities.ConfigurationReader;
import com.fashionette.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Order_loginPage extends Base {

    public float acPrice;
    public float cartPrice;
    String actual_product_name;
    String cart_product_name;

    public Order_loginPage() {

        PageFactory.initElements(Driver.get(ConfigurationReader.get("url")), this);

    }

    @FindBy(css = "a[title='Shoes'][href='https://www.fashionette.co.uk/shoes']")
    public WebElement shoes_page;

    @FindBy(id = "uc-btn-accept-banner")
    public WebElement accept_cookies;

    @FindBy(css = "img[title='Alexander McQueen, Sneakers Leather White/Black']")
    public WebElement selected_product;

    @FindBy(css = "div[class='btn btn--bigger-icon preventspinner btn-default'] div[class='btn__content']")
    public WebElement add_to_cart_button;

    @FindBy(xpath = "//a[@title='Login']")
    public WebElement login_button;

    @FindBy(css = "input[name='email']")
    public WebElement email_input;

    @FindBy(css = "input[name='password']")
    public WebElement password_input;

    @FindBy(xpath = "//button[normalize-space()='Login']")
    public WebElement login_submit;
    @FindBy(css = ".cart--header__icons")
    public WebElement go_to_cart_button;

    @FindBy(css = ".product-details__description__price--special.font-size--h1")
    public WebElement act_price;

    @FindBy(css = "#cart__total")
    public WebElement cart_price;

    @FindBy(css = "a[href='https://www.fashionette.co.uk/hugo'][itemprop='brand']")
    public WebElement selected_shoes_name;

    @FindBy(css = ".cart-item--brand")
    public WebElement shoes_name_cart;


    public void main_page() {

        String url = ConfigurationReader.get("url");
        Driver.get(ConfigurationReader.get("browser")).manage().window().maximize();
        Driver.get(ConfigurationReader.get("browser")).get(url);
        waitForClickablility(accept_cookies, 3);
        accept_cookies.click();
    }

    public void navto_shoespage() {

        shoes_page.click();


    }

    public void sel_item() {

        waitForPageToLoad(4);
        scrollDown(selected_product);
        selected_product.click();
        waitForVisibility(act_price, 5);
        actualPrice();
        get_actual_product_name();
        waitForPageToLoad(4);


    }

    public void add_to_cart() {

        waitForClickablility(add_to_cart_button, 4);
        add_to_cart_button.click();
        waitForPageToLoad(4);
      //  waitFor(1);

    }

    public void navto_login() {


        waitForClickablility(login_button, 5);
        login_button.click();
        waitForPageToLoad(5);


    }

    public void login(String mail, String password) {

        try {
            waitForClickablility(email_input, 4);
            email_input.sendKeys(mail);
            password_input.sendKeys(password);
            login_submit.click();

        } catch (Exception e) {
            System.out.println("Invalid username or password");
        }
    }

    public void nav_to_cart() {
        waitForClickablility(go_to_cart_button, 4);
        go_to_cart_button.click();
        waitForVisibility(cart_price, 4);
        cart_final_price();
        get_cart_product_name();


    }


    public float actualPrice() {

        String str = act_price.getText();
        StringBuilder sb = new StringBuilder(str);
        System.out.println(sb);
        sb.deleteCharAt(0);
        System.out.println(sb);
        acPrice = Float.parseFloat(String.valueOf(sb));
        System.out.println(acPrice);
        return acPrice;

    }

    public float cart_final_price() {

        String str = cart_price.getText();
        StringBuilder sb = new StringBuilder(str);
        System.out.println(sb);
        sb.deleteCharAt(0);
        System.out.println(sb);
        cartPrice = Float.parseFloat(String.valueOf(sb));
        System.out.println(cartPrice);
        return cartPrice;

    }

    public String get_actual_product_name() {

        actual_product_name = selected_shoes_name.getText();

        return actual_product_name;


    }


    public String get_cart_product_name() {

        cart_product_name = shoes_name_cart.getText();
        return cart_product_name;
    }


    public void assert_prices() {

        Assert.assertEquals(acPrice, cartPrice, .00);
    }

    public void assert_names() {

        Assert.assertEquals(cart_product_name, actual_product_name);
    }


}
