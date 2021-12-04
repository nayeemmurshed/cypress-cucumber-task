class CheckoutSummaryPage {
  
    get finishButton() {
        return cy.get('[data-test="finish"]');
      }
    
}

export default new CheckoutSummaryPage();
