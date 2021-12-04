class InventoryPage {
    
      get productSortDropdown() {
        return cy.get('[data-test="product_sort_container"]');
      }
    
      get addToCartButton() {
        return cy.get('[data-test*="add-to-cart"]');
      }
    
      get shoppingCartButton() {
        return cy.get('.shopping_cart_link');
      }
}

export default new InventoryPage();
