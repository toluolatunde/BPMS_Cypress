class GeneratedBills
 {
     getGeneratedBillBtn()
     {
         return cy.get('.text-primary > span').should('be.visible').and('include.text', 'Generated')
     }

     getGendBillHeaderText()
     {
         return cy.get('.nk-block-between-md > :nth-child(1) > .nk-block-title').should('have.text', 'Generated Bills')
     }
    
    getGenBillBtn()
    {
        return cy.get('.card-header > .btn').should('be.visible')
    }
    
    getClearFilterBtn()
    {
        return cy.get('.underline').should('be.visible').and('include.text', 'Clear')
    }
    
    getShowFilterBtn()
    {
        return cy.get('#toggle_filter_section').should('be.visible').and('include.text', 'Filter')
    }

    getApplyFilterBtn()
    {
        return cy.get(':nth-child(2) > .row > .col-md-6 > .btn').should('be.visible')
    }

    getMinistryColumn()
    {
        return cy.get('.bg-custom-green > tr > :nth-child(1)').should('be.visible').and('include.text','Ministry')
    }
    
    getDepartmentColumn()
    {
        return cy.get('.bg-custom-green > tr > :nth-child(2)').should('be.visible').and('include.text','Department')
    }
    
    getServiceColumn()
    {
        return cy.get('.bg-custom-green > tr > :nth-child(3)').should('be.visible').and('include.text','Service')
    }
    
    getPaymentCodeColumn()
    {
        return cy.get('.bg-custom-green > tr > :nth-child(4)').should('be.visible').and('include.text','Payment')
    }

    getBilledToColumn()
    {
        return cy.get('.bg-custom-green > tr > :nth-child(5)').should('be.visible').and('include.text','Billed')
    }

    getDateCreatedColumn()
    {
        return cy.get('.bg-custom-green > tr > :nth-child(6)').should('be.visible').and('include.text','Date')
    }

    getAmountPaidColumn()
    {
        return cy.get('.bg-custom-green > tr > :nth-child(8)').should('be.visible').and('include.text','Paid')
    }

    getInvoicedColumn()
    {
        return cy.get('.bg-custom-green > tr > :nth-child(7)').should('be.visible').and('include.text','Invoiced')
    }

    getViewBillBtn()
    {
        return cy.get(':nth-child(1) > :nth-child(9) > .btn').should('be.visible')
    }

    getMinistryFilter()
    {
        return cy.get('#ministry').should('be.visible')
    }

    getDepartmentFilter()
    {
        return cy.get('#department').should('be.visible')
    }

    getServiceFilter()
    {
        return cy.get('#service').should('be.visible')
    }

    getBillStatusFilter()
    {
        return cy.get('#invoice_status').should('be.visible')
    }

    getBillsDateFromFilter()
    {
        cy.get('#bill_created_from').should('be.visible')
    }

    getBillsDateToFilter()
    {
        return cy.get('#bill_created_from').should('be.visible')
    }

    getPaymentCodeFilter()
    {
        return cy.get('#payment_code').should('be.visible')
    }

    getBillDescripFilter()
    {
        return cy.get('#other_search').should('be.visible')
    }

    getGendBillTable()
    {
        return cy.get('.col-md-12 > .row > .col-md-5 > .dataTables_info').should('be.visible')
    }


}

export default GeneratedBills;