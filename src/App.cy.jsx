import React from 'react'
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
  })
  describe('testing funcktinalety of all components', () => {
    it('all components on encrypt', () => {
      cy.mount(<App />)

      cy.get('#test-input').type('test this')
      cy.get('#key-input').type('h4jd4f')

      cy.get('#encrypt').click()

      cy.get('#text-output').contains('encrypt: test this key: h4jd4f')
    })
    it('all components on decrypt', () => {
      cy.mount(<App />)

      cy.get('#test-input').type('test this')
      cy.get('#key-input').type('h4jd4f')

      cy.get('#decrypt').click()

      cy.get('#text-output').contains('decrypt: test this key: h4jd4f')
    })
  })
})