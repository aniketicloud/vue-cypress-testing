/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Event', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:8081/event',
      {
        fixture: 'list-events.json',
      }).as('list-events');

    cy.intercept('POST', 'http://localhost:8081/event',
      {
        fixture: 'create-event.json',
      }).as('create-event')

  });

  it('should list all events', () => {
    cy.visit('/');
    cy.wait('@list-events', { timeout: 10000 });
  });

  it('should create an event', () => {
    cy.visit('/');
    cy.window().then((win) => {
      cy.fixture('create-event.json').then((fixture) => {
        win.__app__.$store.dispatch('createEvent', fixture)
      })
      cy.wait('@create-event', { timeout: 10000 })
    })
  })

});
