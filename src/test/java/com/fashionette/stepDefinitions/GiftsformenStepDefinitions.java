package com.fashionette.stepDefinitions;

import com.fashionette.uipages.Base;
import com.fashionette.uipages.GiftsForMen;
import io.cucumber.java.en.And;
import io.cucumber.java.en.When;

public class GiftsformenStepDefinitions {

    GiftsForMen giftsForMen = new GiftsForMen();


    @When("the customer navigates to gifts for men section")
    public void theCustomerNavigatesToGiftsForMenSection() {

        giftsForMen.navtoGiftsForMan();
    }

    @And("the customer clicks watches section")
    public void theCustomerClicksWatchesSection() {
        giftsForMen.navToWatches();

    }

    @And("the customer filters ascending order")
    public void theCustomerFiltersAscendingOrder() {

        giftsForMen.priceAscendingFilter();

    }


    @And("the customer clicks on desired item")
    public void theCustomerClicksOnDesiredItem() {

        giftsForMen.clickDesiredWatch();
    }



}
