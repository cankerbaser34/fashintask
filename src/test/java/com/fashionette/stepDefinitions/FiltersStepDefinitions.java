package com.fashionette.stepDefinitions;

import com.fashionette.uipages.FIlterpage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;

public class FiltersStepDefinitions {

    FIlterpage fIlterpage =new FIlterpage();

    @Then("the customer filters designers")
    public void theCustomerFiltersDesigners() {

        fIlterpage.click_designerfilter();
    }

    @Then("the customer filters color of the product")
    public void theCustomerFiltersColorOfTheProduct() {

        fIlterpage.colorFilter();


    }

    @And("the customer filters categories")
    public void theCustomerFiltersCategories() {

        fIlterpage.filter_categories_sandals();

    }

    @And("the customer filters sales")
    public void theCustomerFiltersSales() {

        fIlterpage.filter_sale();
    }

    @And("the customer selects desired sandal")
    public void theCustomerSelectsDesiredSandal() {

        fIlterpage.select_item();
    }
}
