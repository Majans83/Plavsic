/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')

describe ("Register page", () => {

  it("Visit register page", () => {
      cy.visit('/register');

  });
it("Positive case - Successful registration", () => {
  cy.visit('/register');
  cy.get(locators.registerPage.firstNameInputField).type('majatest2019');
  cy.get(locators.registerPage.lastNameInputField).type('majatest9102');
  cy.get(locators.registerPage.emailinputField).type('emi2019@gmail.com');
  cy.get(locators.registerPage.passwordInputField).type('test1234');
  cy.get(locators.registerPage.passwordConfirmation).type('test1234');
  cy.get(locators.registerPage.acceptTermsCheckbox).check();
  cy.get(locators.registerPage.submitBtn).click();
})

});