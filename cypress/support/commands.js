// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
Cypress.Commands.add("validlogin", () => {
    cy.visit('/') 
    cy.get('form > :nth-child(2) > .form-control')
        .should('be.visible').type('tolu@initsng.com')
    cy.get('#password').should('be.visible')
        .type('Password23$')
    cy.get('.icon-show').should('be.visible')
    cy.get(':nth-child(4) > .btn').click()
    cy.get('.user-name').should('be.visible')

})

Cypress.Commands.add("logout", () => {
    cy.get('.hide-mb-sm > .nk-quick-nav-icon').click()
    cy.get('.swal2-confirm').click()
    cy.get(':nth-child(3) > .form-label-group > .form-label').should('have.text', 'Password')

})


//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
