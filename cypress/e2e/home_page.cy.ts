describe('Visita biblioteca', () => {
  it('successfully loads', () => {
    cy.visit('/') // change URL to match your dev URL

    //Preenchimento do formulario Padrão
    cy.get('input[formControlName="company"]').type('Mv minha vida ')
    cy.get('input[formControlName="firstName"]').type('Vinicius')
    cy.get('input[formControlName="lastName"]').type('Diniz')
    cy.get('textarea[formControlName="address"]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    cy.get('button[type="button"]#btnAddEnd').click()
    cy.get('textarea[formControlName="address2"]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    cy.get('input[formControlName="city"]').type('IPU')
    cy.get('mat-select[formControlName="state"]').click().get('mat-option').contains('Alaska').click()
    cy.get('mat-select[formControlName="state"]').click().get('mat-option').contains('Alaska').click()
    cy.get('input[formControlName="postalCode"]').type('99999')
    cy.get('mat-radio-button[value="priority"]').click()
    cy.get('button[type="submit"]').click()
  })


})




