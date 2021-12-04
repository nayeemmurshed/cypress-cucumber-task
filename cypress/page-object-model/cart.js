class CartPage {
  

    get checkoutButton() {
        return cy.get('[data-test="checkout"]');
      }
    
}

export default new CartPage();
