/// <reference types="cypress" />

describe('Event', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:8081/event', {
      fixture: 'list-events.json',
    }).as('list-events');
  });

  it('should list all events', () => {
    cy.visit('/');
    cy.wait('@list-events', { timeout: 10000 });
  });
});
