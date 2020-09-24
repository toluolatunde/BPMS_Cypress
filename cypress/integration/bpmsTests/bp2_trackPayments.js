import Dashboard from '../pageObjects/DashboardPage'
import TrackPaymentsPage from '../pageObjects/TrackPaymentsPage'

describe('Track Payment Module', function () {

    const dashboard = new Dashboard()
    const track = new TrackPaymentsPage()

    beforeEach(function () {
        cy.validlogin()
    })


    it('Verify track payment page is displayed', function () {

       dashboard.trackPayments().click()
       cy.url().should('include', 'payments')
       track.toRefreshPage()
       track.totalRevCard()
       track.expectedAmtCard()
       track.numberOfPaymentsCard()
       track.billsGenCard()
       track.paymentFromFilter()
       track.paymentToFilter()
       track.filterByService()
       track.billingFromFilter()
       track.billingToFilter()
       track.applyFilterBtn()
       track.serviceColumn()
       track.paymentCodeColumn()
       track.payeeColumn()
       track.serviceColumn()
       track.ministryColumn()
       track.createdAtColumn()
       track.amountPaidColumn()
       track.departmentColumn()
       track.tableInfo() 
       
    })


    it('Verify filter by payments made works', function () {

        dashboard.trackPayments().click()
        cy.url().should('include', 'payments')
        track.paymentFromFilter().click()
        track.dateFromSelector().click()
        track.paymentToFilter().click()
        track.dateToSelector().click()
        track.applyFilterBtn().click()
        
    })


    it('Verify filter by billings works', function () {

        dashboard.trackPayments().click()
        cy.url().should('include', 'payments')
        track.billingFromFilter().click()
        track.dateFromSelector().click()
        track.billingToFilter().click()
        track.dateToSelector().click()
        track.applyFilterBtn().click()
       
    })


    it('Verify filter by service without date range', function () {

        dashboard.trackPayments().click()
        cy.url().should('include', 'payments')
        track.filterByService().type('Land').select('Land Use and Amenities Charge')
        track.filterByService().should('include.text', 'Land Use')
        track.applyFilterBtn().click()
        track.filterSecondRowResult().should('include.text', 'Land Use')
    
    })

    it('Verify filter by service with date range', function () {

        dashboard.trackPayments().click()
        cy.url().should('include', 'payments')
        track.filterByService().type('Land').select('Land Use and Amenities Charge')
        track.paymentFromFilter().type('2020-09-01')
        track.paymentToFilter().type('2020-09-20')
        track.paymentFromFilter().should('include.value','2020-09-01')
        track.paymentToFilter().should('include.value','2020-09-20')
        track.applyFilterBtn().click()
        track.paymentFromFilter().should('include.value','2020-09-01')
        track.paymentToFilter().should('include.value','2020-09-20')
        track.filterSecondRowResult().should('include.text', 'Land Use')
        
   
    })

    after (function()  {
        cy.clearCookie
        });  
    

})