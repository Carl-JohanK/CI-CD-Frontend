import React from 'react'
import TextInput from './textInput'

describe('<TextInput />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TextInput />)
  })
  describe('testing Text Input if it exists', () => {
    it('check for string input exists', () => {
      cy.mount(<TextInput />)
      
      cy.get('#text-input').should('exist').should('be.visible')
    })
    it('check for key input exists', () => {
      cy.mount(<TextInput />)
      
      cy.get('#key-input').should('exist').should('be.visible')
    })
    describe('testing Text Input if can enter text', () => {
      it('check for string input has text', () => {
        cy.mount(<TextInput />)
        
        cy.get('#text-input').type('test string').contains('test string')
      })
      it('check for key input has text', () => {
        cy.mount(<TextInput />)
        
        cy.get('#key-input').type('test key').contains('test key')
      })
    })
  })
})