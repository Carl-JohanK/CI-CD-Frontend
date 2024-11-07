import React from 'react'
import TextUotput from './TextOutput'

describe('<TextUotput />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TextUotput />)
  })
  it('text-output exist', () => {
    cy.mount(<TextUotput />)

    cy.get('#text-output').should('exist')
  })
})