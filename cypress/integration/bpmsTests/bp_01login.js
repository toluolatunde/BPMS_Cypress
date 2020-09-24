import Login from '../pageObjects/LoginPage'

describe('Login Functionality', function () {

    const login = new Login()


    beforeEach(function () {
        // runs once before all tests in the block
        cy.visit("/");
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })



    it('User can not login with invalid credentials Login', function () {

        login.getEmail().should('be.visible')
            .type(this.data.wemail)
        login.getPassword().should('be.visible')
            .type(this.data.wpassword)
        login.getPasswordEye().should('be.visible')
        login.getLoginBtn().click()
        login.getButtomAlert()
        login.getTopAlert()

    })

    it('User can not login without email', function () {

        login.getEmail().should('be.visible')
        login.getPassword().should('be.visible').type(this.data.wpassword)
        login.getPasswordEye().should('be.visible')
        login.getLoginBtn().click()
        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/login')

    })

    it('User can login with valid email', function () {

        cy.validlogin()

    })

    after(function () {
        cy.logout()

    })

})