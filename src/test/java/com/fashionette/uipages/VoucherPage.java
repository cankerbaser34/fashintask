package com.fashionette.uipages;

import com.fashionette.utilities.ConfigurationReader;
import com.fashionette.utilities.Driver;
import io.cucumber.java.an.E;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class VoucherPage extends Base {


    static float cart_Price;

    public VoucherPage() {
        PageFactory.initElements(Driver.get(ConfigurationReader.get("url")), this);
    }

    @FindBy(css = "tbody tr:nth-child(3) th:nth-child(1)")
    public WebElement redeem_button;
    @FindBy(css = "input[placeholder='Coupon']")
    public WebElement voucher_input;
    @FindBy(xpath = "//button[normalize-space()='redeem']")
    public WebElement redeem_click_button;
    @FindBy(xpath = "//td[@id='cart__total']")
    public WebElement cart_price;
    @FindBy(css = ".cart-item--price")
    public WebElement cart_item_price;

    @FindBy(css = "tr[class='cart__sum__payment__installment-shipping-note'] td")
    public WebElement voucher_message;




    public void nav_to_voucher() {

        waitForClickablility(redeem_button, 3);
        redeem_button.click();

    }

    public void type_voucher(String voucher_id) {


        voucher_input.sendKeys(voucher_id);
        redeem_click_button.click();
        waitFor(1);
        cart_final_price();
    }


    public float cart_final_price() {

        String str = cart_price.getText();
        StringBuilder sb = new StringBuilder(str);
        System.out.println(sb);
        sb.deleteCharAt(0);
        cart_Price = Float.parseFloat(String.valueOf(sb));
        System.out.println(cart_Price);
        return cart_Price;


    }

    public float price_with_discount() {

        String str_price = cart_item_price.getText();
        StringBuilder price_text = new StringBuilder(str_price);
        price_text.deleteCharAt(0);
        float price_after_discount = Float.parseFloat(String.valueOf(price_text)) * 90 / 100;
        System.out.println(price_after_discount);
        return price_after_discount;
    }

    public String get_voucher_message(){
        String vouc_message =voucher_message.getText();
        System.out.println(vouc_message);
        return vouc_message;
    }


    public void
    validate_voucher() {

        try{
            Assert.assertEquals(price_with_discount(),cart_final_price(),0.00);
            Assert.assertEquals("Your voucher discount will be applied to the last instalment.",get_voucher_message());
        }
        catch (Exception e){
            System.out.println("Not valid coupon");
        }



    }

}

