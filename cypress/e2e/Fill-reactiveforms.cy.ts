describe('Fill Reactive forms',()=>{
  it('Navigate until page',()=>{
    //Visita o endereço
    cy.visit('/')
    cy.get('#id').type("admin")
    cy.get('#senha').type("admin")
    cy.get('#button').click()

    //Clica no menu da toolbar
    cy.get('#MenuToggle').click()
    cy.wait(1000)

    //Clica no link do reactive forms
    cy.contains('Reactive Forms').click()

    //Fecha a sidebar
    cy.get('#close').click()

    //Preenchae os formulários
    cy.get('#Nome').type('Felipe frans brother')

    //Preenche o email
    cy.get("#Email").type('felipe@alcantara.com')

    //Preenche cpf
    cy.get("#CPF").type('1233332312')

    //Preenche senha
    const senha = '234421'
    cy.get('input[formControlName="senha"]').type(senha)
    cy.wait(1000)
    cy.get('input[formControlName="senhaConfirm"]')
    .type("213333")

    cy.get('.btn-success').click()
  }
  )
})
