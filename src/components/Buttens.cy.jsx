import React from 'react'
import Buttens from './buttens'

describe('<Buttens />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Buttens />)
  })
  describe('chack if bottens exists', () => {
    it('check if encrypt botten exist and it is visible', () => {
      cy.mount(<Buttens />)
      cy.get('#encrypt').should('exist').should('be.visible')
    })
    it('check if decrypt botten exist and it is visible', () => {
      cy.mount(<Buttens />)
      cy.get('#decrypt').should('exist').should('be.visible')
    })
  })
})