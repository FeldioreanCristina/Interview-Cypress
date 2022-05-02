
describe('Check Navigation Page', () => {

    beforeEach('Visit website Emag', () => {
        cy.visit('https://www.emag.ro/');
    })

    it('Add to cart TV and accesory', () => {
            cy.get('body > div.main-container-outer > div.megamenu-container.megamenu-always-open > div > div.megamenu-list-container > ul > li:nth-child(4) > a')
                .click({force:true});
        })
    })