package com.fashionette.stepDefinitions;

import com.fashionette.uipages.Order_loginPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDefinitions {

    Order_loginPage loginPage = new Order_loginPage();

    @Then("Validate the customer logged in suscessfully.")
    public void validateTheCustomerLoggedInSuscessfully() {


        loginPage.assertSucessLogin();
    }

    @When("the customer enters wrong   {string} and {string}")
    public void theCustomerEntersWrongAnd(String email, String password) {

        loginPage.login(email, password);


    }

    @Then("Validate logging application with wrong credentials")
    public void validateLoggingApplicationWithWrongCredentials() {

        loginPage.asserInvalidLogginMessage();

    }

    @Then("Validate Forgotten Password link")
    public void validateForgottenPasswordLink() {

        loginPage.assertForgotPasswordLink();
    }

    @And("validate login page Title")
    public void validateLoginPageTitle() {

        loginPage.assertLoginTitle();

    }

    @And("validate login page url")
    public void validateLoginPageUrl() {

        loginPage.assertUrlLoginPage();
    }


}
