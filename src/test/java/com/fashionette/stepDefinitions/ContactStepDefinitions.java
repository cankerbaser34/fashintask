package com.fashionette.stepDefinitions;

import com.fashionette.uipages.ContactPage;
import io.cucumber.java.en.When;

public class ContactStepDefinitions {

    ContactPage contactPage = new ContactPage();

    @When("customer navigates to contact page")
    public void customerNavigatesToContactPage() {


        contactPage.navToContact();


    }
}
