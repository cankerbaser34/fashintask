package com.fashionette.stepDefinitions;

import com.fashionette.uipages.VoucherPage;
import com.fashionette.utilities.ConfigurationReader;
import io.cucumber.java.en.And;

public class VoucherSteps {

    VoucherPage voucherPage = new VoucherPage();

    @And("the customer clicks voucher section")
    public void theCustomerClicksVoucherSection() {


        voucherPage.nav_to_voucher();


    }

    @And("the customer enters valid {string} and clicks redeem  button")
    public void theCustomerEntersValidAndClicksRedeemButton(String voucher_id) {

         voucher_id = ConfigurationReader.get("voucher_id");

        voucherPage.type_voucher(voucher_id);

    }

    @And("it is verified that voucher applied correctly")
    public void itIsVerifiedThatVoucherAppliedCorrectly() {


        voucherPage.validate_voucher();





    }
}
