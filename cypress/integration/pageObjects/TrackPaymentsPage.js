class TrackPayments {

    totalRevCard() 
    {
        return cy.get(':nth-child(1) > .card > .card-content > .card-body > .media > .media-body > .stat-title').should('include.text', 'Total')
    }

    expectedAmtCard()
    {
        return cy.get(':nth-child(2) > .card > .card-content > .card-body > .media > .media-body > .stat-title').should('include.text', 'amount')
    }

    numberOfPaymentsCard()
    {
        return cy.get(':nth-child(3) > .card > .card-content > .card-body > .media > .media-body > .stat-title').should('include.text', 'Number')
    }

    billsGenCard()
    {
        return cy.get(':nth-child(4) > .card > .card-content > .card-body > .media > .media-body > .stat-title').should('include.text', 'Generated')
    }

    paymentFromFilter()
    {
        return cy.get('#payment_from_date').should('be.visible')
    }

    dateFromSelector()
    {
        return cy.get(':nth-child(2) > :nth-child(4) > .ui-state-default').should('be.visible')
    }

    paymentToFilter()
    {
        return cy.get('#payment_till_date').should('be.visible')
    }

    dateToSelector()
    {
        return cy.get(':nth-child(3) > :nth-child(6) > .ui-state-default')
    }

    filterByService()
    {
        return cy.get('#service').should('be.visible')
    }

    billingFromFilter()
    {
        return cy.get('#bill_created_from').should('be.visible')
    }

    toRefreshPage()
    {
        cy.get('.text-primary > span').should('be.visible')
    }

    billingToFilter()
    {
        return cy.get('#bill_created_to').should('be.visible')
    }

    applyFilterBtn()
    {
        return cy.get('.col-md-4 > .form-group > .btn')
    }

    tableInfo()
    {
        return cy.get(':nth-child(3) > .row > .col-md-5 > .dataTables_info').should('include.text', 'Showing')
    }

    serviceColumn()
    {
        return cy.get('.bg-custom-green > tr > :nth-child(1)').should('be.visible')
    }


    paymentCodeColumn()
    {
        return cy.get('.bg-custom-green > tr > :nth-child(2)').should('be.visible')
    }

    payeeColumn()
    {
        return cy.get('.bg-custom-green > tr > :nth-child(3)').should('be.visible')
    }

    amountPaidColumn()
    {
        return cy.get('.bg-custom-green > tr > :nth-child(4)').should('be.visible')
    }

    createdAtColumn()
    {
        return cy.get('.bg-custom-green > tr > :nth-child(5)').should('be.visible')
    }

    ministryColumn()
    {
        return cy.get('.bg-custom-green > tr > :nth-child(6)').should('be.visible')
    }

    departmentColumn()
    {
        return cy.get('.bg-custom-green > tr > :nth-child(7)').should('be.visible')
    }

    serviceColumn()
    {
        return cy.get('.bg-custom-green > tr > :nth-child(1)').should('be.visible')
    }

    serviceColumn()
    {
        return cy.get('.bg-custom-green > tr > :nth-child(1)').should('be.visible')
    }

    filterSecondRowResult()
    {
        return cy.get('tbody > :nth-child(2) > :nth-child(1)').should('be.visible')
    }

}
export default TrackPayments;