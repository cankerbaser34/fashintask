package com.fashionette.stepDefinitions;

import com.fashionette.uipages.NewPage;
import io.cucumber.java.en.And;

public class NewPageStepDefinitions {


    NewPage newPage =new NewPage();
    @And("the customer navigates to  new page")
    public void theCustomerNavigatesToNewPage() {

        newPage.navToNewPage();
    }
}
