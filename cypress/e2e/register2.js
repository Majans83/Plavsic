/// <reference types="Cypress" />

// const locators = require('../fixtures/locators.json')

import { registerPage } from "../page_object/registerPage";

describe ("Register page", () => {

  it("Visit register page", () => {
      cy.visit('/register');

  });
it("Positive case - Successful registration", () => {
  cy.visit('/register');
  registerPage.firstNameInputField.type('majatest2019');
  registerPage.lastNameInputField.type('majatest9102');
  registerPage.emailInputField.type('emi2019@gmail.com');
  registerPage.passwordInputField.type('test1234');
  registerPage.passwordConfirmationInputField.type('test1234');
  registerPage.acceptTermsCheckbox.check();
  registerPage.submitBtn.click();
})

it("Negative case - Using invalid email", () => {
  cy.visit('/register');
  registerPage.firstNameInputField.type('majatest2019');
  registerPage.lastNameInputField.type('majatest9102');
  registerPage.emailInputField.type('emi2019@@gmail.com');
  registerPage.passwordInputField.type('test1234');
  registerPage.passwordConfirmationInputField.type('test1234');
  registerPage.acceptTermsCheckbox.check();
  registerPage.submitBtn.click();

})

it("Negative case - Using invalid password", () => {
  cy.visit('/register');
  registerPage.firstNameInputField.type('majatest2019');
  registerPage.lastNameInputField.type('majatest9102');
  registerPage.emailInputField.type('emi2019@gmail.com');
  registerPage.passwordInputField.type('t');
  registerPage.passwordConfirmationInputField.type('test1234');
  registerPage.acceptTermsCheckbox.check();
  registerPage.submitBtn.click();

})

it("Negative case - Using invalid password confirmation", () => {
  cy.visit('/register');
  registerPage.firstNameInputField.type('majatest2019');
  registerPage.lastNameInputField.type('majatest9102');
  registerPage.emailInputField.type('emi2019@gmail.com');
  registerPage.passwordInputField.type('test1234');
  registerPage.passwordConfirmationInputField.type('t');
  registerPage.acceptTermsCheckbox.check();
  registerPage.submitBtn.click();

})

it("Negative case - Terms and conditions are not accepted", () => {
  cy.visit('/register');
  registerPage.firstNameInputField.type('majatest2019');
  registerPage.lastNameInputField.type('majatest9102');
  registerPage.emailInputField.type('emi2019@gmail.com');
  registerPage.passwordInputField.type('test1234');
  registerPage.passwordConfirmationInputField.type('test1234');
  registerPage.acceptTermsCheckbox.uncheck();
  registerPage.submitBtn.click();

})

it("Negative case - Leave email field empty", () => {
  cy.visit('/register');
  registerPage.firstNameInputField.type('majatest2019');
  registerPage.lastNameInputField.type('majatest9102');
  registerPage.emailInputField.type('empty');
  registerPage.passwordInputField.type('test1234');
  registerPage.passwordConfirmationInputField.type('test1234');
  registerPage.acceptTermsCheckbox.check();
  registerPage.submitBtn.click();

})
})
