import Dashboard from '../pageObjects/DashboardPage'
import GeneratedBills from '../pageObjects/GenerateBillsPage'

describe('Genearted Bills Module', function () {

    const dashboard = new Dashboard()
    const generated = new GeneratedBills()

    before(function () {
        cy.validlogin()
    })


    it('Verify page is displayed and all elements are present', function () {

        dashboard.generateBills().click()
        generated.getGeneratedBillBtn()
        generated.getGendBillHeaderText
        generated.getGenBillBtn()
        generated.getClearFilterBtn()
        generated.getShowFilterBtn()
        generated.getApplyFilterBtn()
        generated.getMinistryFilter()
        generated.getServiceFilter()
        generated.getDepartmentFilter()
        generated.getBillsDateFromFilter()
        generated.getBillsDateToFilter()
        generated.getBillStatusFilter()
        generated.getBillDescripFilter()
        generated.getBilledToColumn()
        generated.getMinistryColumn()
        generated.getServiceColumn()
        generated.getDepartmentColumn()
        generated.getPaymentCodeFilter()
        generated.getDateCreatedColumn()
        generated.getPaymentCodeColumn()
        generated.getBilledToColumn()
        generated.getInvoicedColumn()
        generated.getViewBillBtn()
        generated.getAmountPaidColumn()
        generated.getGendBillTable()

    })












})