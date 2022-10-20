/// <reference types="cypress" />
const { onPageModel } = require("../../support/pageObjects/PageModel")

describe('Add product to the basket', () => {
  before(function () {
    cy.visitPage()
    cy.fixture('test-data').then((data) => {
      this.data = data
    })
  })

  it('Verify product is added in the basket', function () {
    cy.addItemToBasket()
    onPageModel.getListItemDetail().then(basket => {
      cy.wrap(basket).find('[class="item-variants"]')
        .should('contain', this.data.items)
    })
    onPageModel.getCloseBasketView().click()
  }) 
})
