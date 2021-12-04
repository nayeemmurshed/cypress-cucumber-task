Feature: Purchase items from cart
    Scenario: User navigates to saucedemo homepage and completes purchase of costliest & cheapest item 
        Given I am on the saucedemo login page
        And I login as standard_user
        Then I should arrive on the inventory page
        And  sort the items to high to low
        Then select the first items to basket - costliest
        And sort the items to low to high
        Then select the first items to basket - cheapest
        And I select the basket
        Then I should arrive on the cart page
        And I select checkout 
        Then I should arrive on the checkout infomation page
        And enter details and continue
        Then I should arrive on the checkout summary page
        And finish the purchase

    



