/// <reference types="cypress" />

describe('Navigation', () => {
  it('should have a list events link that navigates to the list events view', () => {
    // navigate to home page
    // added baseUrl in cypress.json
    cy.visit('/');

    // check that "List Events" link is there
    expect(cy.get('a[href="/list-events"]')).to.exist;

    // click on "List Events" link
    cy.get('a[href="/list-events"]').click();

    // verify that user has been redirected to the "List Events" page
    expect(cy.get('h2')).to.exist;
  })
})