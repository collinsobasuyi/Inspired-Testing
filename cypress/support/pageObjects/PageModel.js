export class PageModel {
    getColorLightGreyNavyBlack() {
        return cy.get('[data-selenium="pdp-colour-radio-WTW01XXAMP"]')
    }
    getSizeLarge() {
        return cy.get('[data-selenium="pdp-size-radio-WTW01XXAMPLRG"] > .sc-iAyFgw')
    }
    acceptCookieNotice() {
        return cy.get('.cookie-notice__close:visible')
    }
    getAddToBasket() {
        return cy.contains('[data-selenium="add-to-basket"]', 'Add to basket')
    }

    hoverWomenMenu() {
        return cy.contains('[class="navigation__item primary__item"]', 'Women')
    }

    hoverWomenMenu() {
        return cy.contains('[class="navigation__link tertiary__link  "]', 'Base Layers')
    }
    

    getListItemDetail() {
        return cy.get('[class="list-item-detail lg-8col md-5col sm-4col"]')
    }
    getItemVariants() {
        return cy.get('[class="item-variants"]')
    }
    getCloseBasketView() {
        return cy.get('[class="js-toggle-mini-basket mini-basket-trigger--close"]')
    }
}
export const onPageModel = new PageModel() 
