
describe('Check Navigation Page', () => {

    beforeEach('Visit website', () => {
        cy.visit('/');
    })

    it('Verify titles on landing page', () => {

        cy.get('.banner > h1')
            .should('be.visible');

        cy.get('body > section.products > div.container.container--product-header > div > h1')
            .should('have.css', 'text-align', 'center');

        cy.get('body > section.products > div.product-wp.product--ca > div > div.product.col-2-6 > h2')
            .should('have.css', 'font-size', '30px');

        cy.get('body > section.products > div.product-wp.product--la > div > div.product.col-2-6 > h2')
            .should('have.css', 'color', 'rgb(0, 23, 72)');
    })

    it('Verify statistic of one Section on landing page', () => {
        cy.get('.stats')
            .should('have.css', 'color', 'rgb(120, 135, 167)');

    })

    it('Verify the GET IN TOUCH section',()=>{
        cy.contains('span','GET IN TOUCH');

        cy.get ('.mail')
            .should('have.attr', 'href' , 'mailto:contact@airportlabs.com')
    })

    it('Verify social media links redirecting', () => {
        cy.get('.footer__media > a:nth-child(1)')
            .should('have.attr', 'href', 'https://twitter.com/airportlabs');

        cy.get('body > footer > div > div.footer__item-wp > div:nth-child(2) > div > a:nth-child(2)')
            .should('have.attr', 'href', 'https://www.linkedin.com/company/airport-labs');

        cy.get('body > footer > div > div.footer__item-wp > div:nth-child(2) > div > a:nth-child(3)')
            .should('have.attr', 'href', 'https://www.facebook.com/AirportLabs');

    })

    it.only('Verify logo is visible',()=>{
        cy.get('.logo')
            .should('be.visible')
            .and('have.attr','src')
    })

})