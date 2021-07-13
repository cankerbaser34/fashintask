package com.fashionette.stepDefinitions;

import com.fashionette.uipages.PersonalData;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;

public class PersonalDataEditSteps {

    PersonalData personalData =new PersonalData();

    @Then("the customer navigates to personal data section")
    public void theCustomerNavigatesToPersonalDataSection() {

        personalData.nav_to_persondata();



    }

    @And("the customer clicks edit button to make changes")
    public void theCustomerClickEditButtonToMakeChanges() {

        personalData.click_edit_button();
    }

    @And("the customer selects Mr box as a title")
    public void theCustomerSelectsMrBoxAsATitle() {

        personalData.select_title();
    }

    @And("the customer modifies first and last name and save changes")
    public void theCustomerModifiesFirstAndLastName() {

        personalData.edit_fullname();


    }


    @And("it is verified that changes were applied correctly")
    public void itIsVerifiedThatChangesWereAppliedCorrectly() {

       personalData.assert_name();


    }
}
