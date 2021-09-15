package com.fashionette.uipages;

import com.fashionette.utilities.ConfigurationReader;
import com.fashionette.utilities.Driver;
import io.cucumber.java.bs.A;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.concurrent.TimeUnit;

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

    @FindBy(css = ".forgot-password-toggle")
    public WebElement forgot_password_link_text;

    @FindBy(xpath = "//button[normalize-space()='Login']")
    public WebElement login_submit;

    @FindBy(css = ".account__welcome.text__center.font-size--hero")
    public WebElement welcome_text_message;

    @FindBy(css = ".login__errortext.login--modal__response-error")
    public WebElement invalid_ps_email_message;

    @FindBy(css = ".cart--header__icons")
    public WebElement go_to_cart_button;

    @FindBy(css = ".product-details__description__price--special.font-size--h1")
    public WebElement act_price;

    @FindBy(css = "#cart__total")
    public WebElement cart_price;

    @FindBy(css = "//a[contains(text(),'Alexander McQueen')]")
    public WebElement selected_shoes_name;

    @FindBy(css = ".cart-item--brand")
    public WebElement shoes_name_cart;


    public void main_page() {

        String url = ConfigurationReader.get("url");
        Driver.get(ConfigurationReader.get("browser")).get(url);
        Driver.get(ConfigurationReader.get("browser")).manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
        waitForClickablility(accept_cookies, 3);

        System.out.println(Driver.get(ConfigurationReader.get("browser")).getTitle());

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

        waitForClickablility(add_to_cart_button, 5);
        add_to_cart_button.click();
        waitForPageToLoad(4);
        //  waitFor(1);

    }


    public void assertForgotPasswordLink() {

        String forgotPassword = forgot_password_link_text.getText();
        System.out.println(forgotPassword);
        Assert.assertTrue(forgotPassword.contains("Forgot your password?"));
    }

    public void navto_login() {


        waitForClickablility(login_button, 5);
        login_button.click();
        waitFor(2);


    }

    public void login(String mail, String password) {

        try {
            waitForClickablility(email_input, 5);
            email_input.sendKeys(mail);
            password_input.sendKeys(password);
            login_submit.click();
            waitFor(3);

        } catch (Exception e) {
            System.out.println("Invalid username or password");
        }
    }

    public void assertSucessLogin() {

        String welcome_message = welcome_text_message.getText();
        System.out.println(welcome_message);
        Assert.assertTrue(welcome_message.contains("welcome to your account"));
    }

    public void asserInvalidLogginMessage() {

        String in_login_mess = invalid_ps_email_message.getText();
        Assert.assertTrue(in_login_mess.contains("Please check your email address and password"));
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

    public void assertLoginTitle() {

        String titleLogin = Driver.get(ConfigurationReader.get("browser")).getTitle();
        System.out.println(titleLogin);
        Assert.assertTrue(titleLogin.contains("Buy designer handbags and accessories online"));
    }

    public void assertUrlLoginPage() {

        String currentUrl = Driver.get(ConfigurationReader.get("browser")).getCurrentUrl();

        System.out.println(currentUrl);

        String expectedUrl = "https://www.fashionette.co.uk/login";

        Assert.assertEquals(expectedUrl, currentUrl);

    }

}
