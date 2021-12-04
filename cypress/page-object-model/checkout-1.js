class CheckoutInfoPage {
  
  get firstNameInput() {
    return cy.get('[data-test="firstName"]');
  }

  get lastNameInput() {
    return cy.get('[data-test="lastName"]');
  }
    
  get postalCodeInput() {
    return cy.get('[data-test="postalCode"]');
  }
  
  get continueButton() {
    return cy.get('[data-test="continue"]');
  }
}

export default new CheckoutInfoPage();
