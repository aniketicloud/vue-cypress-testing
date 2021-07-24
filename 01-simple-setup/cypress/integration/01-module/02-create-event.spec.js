/// <reference types="cypress" />

describe('Create Event', () => {
  it('should create a new event', () => {
    /**
     * Step 1: go to the home page
     */
    cy.visit('/')

    /**
     * Step 2: go to 'Create Event' page
     */
    cy.get('[href="/create-event"]').click()
    const createEventPage = cy.get('h2')
    expect(createEventPage).to.exist;

    /**
     * Step 3: fill-in the form with valid details
     */
    const eventName =
      cy.get('#event-name');
    eventName.type('Wizard Duel');

    const eventVenue =
      cy.get('#event-venue');
    eventVenue.type('Hogwarts');

    const currentDate = new Date();
    const eventDateMonth =
      cy.get('#event-date-month');
    eventDateMonth.select('6'); // for July, value prop of select is 6

    const eventDateDay =
      cy.get('#event-date-day');
    eventDateDay.select('31');

    const eventDateYear =
      cy.get('#event-date-year');
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    // Cannot create event this year, if the current month is July
    eventDateYear.select((currentMonth < 6 ? currentYear : (currentYear + 1)).toString());

    const eventTimeHour =
      cy.get('#event-time-hour');
    // !important: Remember to see the value attribute of select field before.
    eventTimeHour.select('1');
    const eventTimeMinute =
      cy.get('#event-time-minute');
    // value of minutes are 01, 02, and so on.
    // so 1,2,3,....9 will give error
    eventTimeMinute.select('01');
    const eventTime =
      cy.get('#event-time');
    eventTime.select('PM');

    const ticketQuantity =
      cy.get('#ticket-quantity');
    ticketQuantity.type('50');

    const eventNotes =
      cy.get('#event-notes');
    eventNotes.type('Rewrite the history of Duel between Slytherin vs Gryffindor.');
    const eventNotesNextLine =
      cy.get('textarea[name="event-notes"]');
    eventNotesNextLine.type('\n And Enjoy !');

    const eventImageSelectSecond =
      cy.get('#event-image-2');
    eventImageSelectSecond.check()

    const eventImageSelectThird =
      cy.get('input[name="event-image"]');
    // !! Important : remember value is used for checking too.
    eventImageSelectThird.check('./assets/event-3.jpg')

    /**
     * Step 4: submit the form
     */
    // const createBtn =
    // cy.get('#create-btn');
    // Another way of selecting the element
    const createBtn =
      cy.get('button').contains('Create');
    createBtn.click();

    /**
     * Step 5: verify the event is created
     */
    // const eventDetailsPage = cy.get('h2').contains('Event Details');
    const eventDetailsPage = cy.get('h2');
    expect(eventDetailsPage).to.exist;
    // Another way of assertion
    // cy.get('h2').should('have.text', 'Event Details')
  })
})