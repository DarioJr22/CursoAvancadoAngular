describe('My First Test', () => {

  /*

  Exemplos de mapeamento de teste

    Visit: https://example.cypress.io
    Find the element with content: type
    Click on it
    Get the URL
    Assert it includes: /commands/actions
    Get the input with the action-email data-testid
    Type fake@email.com into the input
    Assert the input reflects the new value
  */
  it('Visits the Kitchen Sink', () => {
  cy.visit('https://example.cypress.io')
  //contains get doms element contains text.
  cy.contains('type').click()


  //Verifica se tá incluido uma url específica
  cy.url().should('include','/commands/actions')

  //Preenche campo de email
  cy.get('.action-email').type('fake@email').should('have.value','fake@email')
  cy.get('.action-email')
    .type('{selectall}{backspace}')
    .type('Sidokanobeat')
    .should('have.value','Sidokanobeat')




     }
    )
  }
)
