package com.fashionette.uipages;

import com.fashionette.utilities.ConfigurationReader;
import com.fashionette.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class OrderPage extends Base {

    static int count = 0;
    static int acPrice;


 
    public OrderPage() {

        PageFactory.initElements(Driver.get(ConfigurationReader.get("url")), this);

    }

    @FindBy(xpath = "//a[normalize-space()='Laptops']")
    public WebElement laptopsButton;

    @FindBy(xpath = "//body/div/div/div/div/div[1]/div[1]/div[1]/h5[1]")
    public WebElement actualPrice;


    @FindBy(xpath = "//a[normalize-space()='Add to cart']")
    public WebElement add_to_cart_button;

    @FindBy(xpath = "//a[@class='nav-link']")
    public WebElement home_page;

    @FindBy(xpath = "//a[normalize-space()='Cart']")
    public WebElement cart_button;

    @FindBy(xpath = "//button[normalize-space()='Place Order']")
    public WebElement place_order_button;

    @FindBy(id = "name")
    public WebElement name_input;

    @FindBy(id = "country")
    public WebElement country_input;

    @FindBy(id = "city")
    public WebElement city_input;

    @FindBy(id = "card")
    public WebElement credit_card_no_input;

    @FindBy(id = "month")
    public WebElement expire_month_input;

    @FindBy(id = "year")
    public WebElement expire_year_input;

    @FindBy(xpath = "//button[@onclick='purchaseOrder()']")
    public WebElement purchase;

    @FindAll(@FindBy(xpath = "//div[@id='tbodyid']//a[@class='hrefch']"))
    List<WebElement> allLaptops;

    @FindAll(@FindBy(xpath = "//tbody[@id='tbodyid']//td"))
    List<WebElement> product_detailed;

    @FindBy(xpath = "//body/div[10]/p[1]")
    public WebElement confirmation_message;

    @FindBy(css = "button.confirm.btn.btn-lg.btn-primary")
    public WebElement okButton;


    public void main_page() {

        String url = ConfigurationReader.get("url");
        Driver.get(ConfigurationReader.get("browser")).manage().window().maximize();
        Driver.get(ConfigurationReader.get("browser")).get(url);
    }

    public void navigateToLaptops() {
        laptopsButton.click();
        waitFor(2);
        actualPrice();


    }



    public void backToHome() {

        waitFor(1);
        add_to_cart_button.click();
        waitFor(2);
        alert_accept();
        home_page.click();
        waitFor(2);


    }


    public void nav_to_cart() {

        cart_button.click();

        waitFor(2);
    }





    public void click_place_order() {

        place_order_button.click();
        waitFor(2);
    }

    public void fill_up_form(String name, String country, String city, String credit_card_no, String expire_month, String expire_year) {

        name_input.sendKeys(name);
        country_input.sendKeys(country);
        city_input.sendKeys(city);
        credit_card_no_input.sendKeys(credit_card_no);
        expire_month_input.sendKeys(expire_month);
        expire_year_input.sendKeys(expire_year);
        waitFor(2);
        purchase.click();
        waitFor(2);
    }


    public String getTextofReport() {
        return confirmation_message.getText().replaceAll(" ", "");

    }

    public int getID() {

        int indexOfAmount = getTextofReport().indexOf("Amount");
        String id = getTextofReport().substring(getTextofReport().indexOf("Id:"), indexOfAmount).trim();
        int idNum = Integer.parseInt(id.replace("Id:", ""));
        return idNum;
    }

    public int getPrice() {
        int indexOfCard = getTextofReport().indexOf("Card");
        int indexOfAmount = getTextofReport().indexOf("Amount");
        String amount = getTextofReport().substring(indexOfAmount, indexOfCard).trim();
        int price = Integer.parseInt(amount.replace("Amount:", "").replace("USD", "").trim());
        return price;

    }
     public void printPriceandId(){

         int id = getID();
         int price =getPrice();
         System.out.println("id = " + id);
         System.out.println("price = " + price);

     }

     public void assertPrice(){
         int price =getPrice();
         Assert.assertEquals(price,acPrice);
     }


     public int actualPrice(){

        String str =actualPrice.getText();
         StringBuilder sb = new StringBuilder(str);
         sb.deleteCharAt(0);
         acPrice=Integer.parseInt(String.valueOf(sb));
         System.out.println(acPrice);
         return acPrice;
     }

     public void clickOk(){

        okButton.click();

     }



}
