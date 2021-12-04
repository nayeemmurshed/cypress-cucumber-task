import { Given, Then, And } from 'cypress-cucumber-preprocessor/steps';

import SignInPage from '../../page-object-model/sign-in';
import InventoryPage from '../../page-object-model/inventory';
import CartPage from '../../page-object-model/cart';
import CheckoutInfoPage from '../../page-object-model/checkout-1'
import CheckoutSummaryPage from '../../page-object-model/checkout-2'


And('header should read {string}', header => {
  cy.get('[class=header_secondary_container]').contains(header);
});

Given('I am on the saucedemo login page', () => {
    cy.visit('/');
  });

And('I login as standard_user', () => {
  SignInPage.usernameInput.type('standard_user');
  SignInPage.passwordInput.type('secret_sauce');
  SignInPage.loginButton.click();
});

Then('I should arrive on the inventory page', () => {
  cy.url().should('include', '/inventory.html');
});

And('sort the items to high to low', () => {
  InventoryPage.productSortDropdown.select('hilo');
});

Then('select the first items to basket - costliest', () => {
  InventoryPage.addToCartButton.first().click();
});

And('sort the items to low to high', () => {
  InventoryPage.productSortDropdown.select('lohi');
});

Then('select the first items to basket - cheapest', () => {
  InventoryPage.addToCartButton.first().click();
});

And('I select the basket', () => {
  InventoryPage.shoppingCartButton.click();
});

Then('I should arrive on the cart page', () => {
  cy.url().should('include', '/cart.html'); 
});

And('I select checkout', () => {
  CartPage.checkoutButton.click();
});



Then('I should arrive on the checkout infomation page', () => {
  cy.url().should('include', '/checkout-step-one.html'); 
});
And('enter details and continue', () => {
  CheckoutInfoPage.firstNameInput.type('Test');
  CheckoutInfoPage.lastNameInput.type('Checkout');
  CheckoutInfoPage.postalCodeInput.type('EN2 4RD');
  CheckoutInfoPage.continueButton.click();

});

Then('I should arrive on the checkout summary page', () => {
  cy.url().should('include', '/checkout-step-two.html') 
});
And('finish the purchase', () => {
  CheckoutSummaryPage.finishButton.click();
  cy.url().should('include', '/checkout-complete.html');
});