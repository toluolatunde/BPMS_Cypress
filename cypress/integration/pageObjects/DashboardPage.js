class Dashboard
{

dashboardLink()
{
    return cy.get('form > :nth-child(2) > .form-control')
}

expectedCard()
{
    return cy.get(':nth-child(1) > .card > .card-content > .card-body > .nk-wgw-name > .nk-wgw-title')

}

revenueCard()
{
    return cy.get(':nth-child(1) > .nk-wg7-title')

}

departmentCard()
{
    return cy.get(':nth-child(3) > .card > .card-content > .card-body > .nk-wgw-name > .nk-wgw-title')

}

billsCard()
{
    return cy.get('.nk-wg7-stats-group > :nth-child(1) > :nth-child(1)')

}

trackPayments()
{
    return cy.get('.nk-menu > :nth-child(2) > .nk-menu-link > .nk-menu-text')

}
generateBill()
{
  return  cy.get('.nk-menu > :nth-child(3) > .nk-menu-link > .nk-menu-text')
}

generateBills()
{
   return cy.get('.nk-menu > :nth-child(4) > .nk-menu-link > .nk-menu-text')
}

addComplaints()
{
   return  cy.get('.nk-menu > :nth-child(5) > .nk-menu-link > .nk-menu-text')
}

handleComplaints()
{
   return cy.get('.nk-menu > :nth-child(6) > .nk-menu-link > .nk-menu-text')
}

changeRequest()
{
   return cy.get(':nth-child(7) > .nk-menu-toggle > .nk-menu-text')
}

reportDrp()
{
   return cy.get(':nth-child(8) > .nk-menu-toggle > .nk-menu-text')
}

setupDrp()
{
   return cy.get(':nth-child(9) > .nk-menu-toggle > .nk-menu-text')
}

othersDrp()
{
   return cy.get(':nth-child(10) > .nk-menu-toggle > .nk-menu-text')
}

summaryCard()
{
   return cy.get(':nth-child(2) > .nk-block-content > .row > :nth-child(1) > .card > .card-inner')
}

totalRevenueCard()
{
   return cy.get(':nth-child(1) > .nk-wg7-title')
}

}

export default Dashboard;
