package com.fashionette.stepDefinitions;

import com.fashionette.uipages.Order_loginPage;
import com.fashionette.utilities.ConfigurationReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class PurchaseLoginSteps {

    Order_loginPage or_login = new Order_loginPage();

    @Given("the customer is on the homePage")
    public void theCustomerIsOnTheHomePage() {
        or_login.main_page();

    }

    @When("the customer navigates to shoes page to see available shoes")
    public void theCustomerNavigatesToPageToSeeAvailableShoes() {
        or_login.navto_shoespage();

    }

    @Then("the customer selects desired item")
    public void theCustomerSelectsOneShoesNamed() {
        or_login.sel_item();

    }

    @And("the customer clicks add to cart button")
    public void theCustomerClickAddToCartButton() {

        or_login.add_to_cart();


    }

    @And("the customer navigates to login page")
    public void theCustomerNavigatesToLoginPage() {

        or_login.navto_login();


    }

    @And("the customer logged in with valid {string} and {string}")
    public void theCustomerLoggedInWithValidAnd(String email, String password) {

        email = ConfigurationReader.get("user_name");
        password = ConfigurationReader.get("password");
        or_login.login(email, password);

    }

    @Then("the customer clicks go to card button")
    public void theCustomerClicksGoToCardButton() {

        or_login.nav_to_cart();
    }

    @And("the price of and name of  product verified")
    public void thePriceAndNameOfProductsVerified() {

        or_login.assert_prices();
       or_login.assert_names();


    }
}
