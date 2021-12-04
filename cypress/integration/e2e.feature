Feature: Purchase items from cart
    Scenario: User navigates to saucedemo homepage and completes purchase of costliest & cheapest item 
        Given I am on the saucedemo login page
        And I login as standard_user
        Then I should arrive on the inventory page
        And header should read "Products"
        And  sort the items to high to low
        Then select the first items to basket - costliest
        And sort the items to low to high
        Then select the first items to basket - cheapest
        And I select the basket
        Then I should arrive on the cart page
        And header should read "Your Cart"
        And I select checkout 
        Then I should arrive on the checkout infomation page
        And header should read "Checkout: Your Information"
        And enter details and continue
        Then I should arrive on the checkout summary page
        And header should read "Checkout: Overview"
        And finish the purchase
        And header should read "Checkout: Complete!"

    



