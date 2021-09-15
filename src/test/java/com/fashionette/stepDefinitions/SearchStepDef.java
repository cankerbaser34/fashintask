package com.fashionette.stepDefinitions;

import com.fashionette.uipages.Base;
import com.fashionette.uipages.SearchPage;
import com.fashionette.utilities.ConfigurationReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.When;

public class SearchStepDef extends Base {

    SearchPage searchPage = new SearchPage();

    @When("the customer clicks search button")
    public void theCustomerClicksSearchButton() {

        searchPage.click_search_button();

    }

    @And("the customer enters {string} to search")
    public void theCustomerEntersToSearch(String keyword) {

        keyword= ConfigurationReader.get("search_word");
        searchPage.type_word(keyword);
    }

    @And("the customer selects desired bag")
    public void theCustomerSelectsDesiredBag() {

        searchPage.clickSelectedBag();
    }

    @When("the customer clicks designers  button")
    public void theCustomerClicksDesignersButton() {

        searchPage.navto_designers_page();
    }

    @And("the customer selects desired {string}")
    public void theCustomerSelectsDesired(String desinger_name) {

        searchPage.click_desired_designer();
    }

    @And("the customer is selects one product of designer")
    public void theCustomerIsSelectsOneProductOfDesigner() {

        searchPage.click_selected_product();

    }

    @And("the customer clicks  card button")
    public void theCustomerClicksCardButton() {

        searchPage.navto_cart_button();
    }


}
