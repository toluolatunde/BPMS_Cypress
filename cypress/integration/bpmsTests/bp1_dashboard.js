import Dashboard from '../pageObjects/DashboardPage'

describe('Dashboard Module', function () {

    const dashboard = new Dashboard()

    before(function () {
        cy.validlogin()
    })


    it('Verify all dashboard elements are displayed', function () {

        //dashboard.dashboardLink().should('have.text', 'Dashboard').click()
        //cy.url().should('include', '/dashboard')
        cy.get('.user-name').should('be.visible')
        dashboard.revenueCard().should('include.text', 'Revenue')
        dashboard.expectedCard().should('include.text', 'Expected')
        dashboard.departmentCard().should('include.text', 'Departments')
        dashboard.billsCard().should('include.text', 'Bills')
        dashboard.trackPayments().should('include.text', 'Track')
        dashboard.generateBill().should('include.text', 'Generate')
        cy.get('.user-name').should('be.visible')
        dashboard.generateBills().should('include.text', 'Generated')
        dashboard.addComplaints().should('include.text', 'Add')
        dashboard.handleComplaints().should('include.text', 'Handle')
        dashboard.changeRequest().should('include.text', 'Change')
        dashboard.reportDrp().should('include.text', 'Reports')
        dashboard.setupDrp().should('include.text', 'Setup')
        dashboard.othersDrp().should('include.text', 'Others')
        dashboard.summaryCard().should('be.visible')
        dashboard.totalRevenueCard().should('include.text', 'Total Revenue')
        cy.get('.d-flex > .row').should('be.visible')

    })


})