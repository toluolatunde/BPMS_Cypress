describe('Dashboard Module', function () {

    before(function () {
        cy.validlogin()
    })


    it('Verify all dashboard elements are displayed', function () {

        cy.get('.nk-menu > :nth-child(1) > .nk-menu-link > .nk-menu-text').should('have.text', 'Dashboard').click()
        cy.url().should('include', '/dashboard')

    })

})