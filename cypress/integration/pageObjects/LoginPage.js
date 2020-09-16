class Login
{

getEmail()
{
    return cy.get('form > :nth-child(2) > .form-control')
}

getPassword()
{
    return cy.get('#password').should('be.visible')

}
getForgotPassword()
{
  return  cy.get('.link')
}

getLoginBtn()
{
   return cy.get(':nth-child(4) > .btn')
}

getPasswordEye()
{
   return cy.get('.icon-show')
}

getButtomAlert()
{
   return cy.get('li')
}

getTopAlert()
{
   return cy.get('small')
}

}

export default Login;
