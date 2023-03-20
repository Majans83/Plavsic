/// <reference types="Cypress" />

describe ("Register page", () => {

  it("Visit register page", () => {
      cy.visit("https://gallery-app.vivifyideas.com/register");

  });
it("Positive case - Successful registration", () => {
  cy.visit("https://gallery-app.vivifyideas.com/register");
  cy.get('input[id="first-name"]').type('majatest2019');
  cy.get('input[id="last-name"]').type('majatest9102');
  cy.get('input[id="email"]').type('emi2019@gmail.com');
  cy.get('input[id="password"]').type('test1234');
  cy.get('input[id="password-confirmation"]').type('test1234');
  cy.get('input[type="checkbox"]').check();
  cy.get('button[type="submit"]').click();
})

});