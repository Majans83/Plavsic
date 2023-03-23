/// <reference types="Cypress" />

// const locators = require('../fixtures/locators.json')

import { registerPage } from "../page_object/registerPage";

import { faker } from '@faker-js/faker';
import { loginPage } from "../page_object/login";

describe ("Register page", () => {

  beforeEach(() => {
   cy.visit('/register');
   cy.url().should('contains','/register');
  });

  it.only('Check UI elements of Register page', () => {
    registerPage.headingText.should('have.text', 'Register')
  })
  it("Visit register page", () => {
      

  });
it.only("Positive case - Successful registration", () => {
  cy.visit('/register');

  var firstName = faker.name.firstName();
  var lastName = faker.name.lastName();
  var userEmail = faker.internet.email();
  var password = faker.internet.password();

  registerPage.firstNameInputField.type(firstName);
  registerPage.lastNameInputField.type(lastName);
  registerPage.emailInputField.type(userEmail);
  registerPage.passwordInputField.type(password);
  registerPage.passwordConfirmationInputField.type(password);
  registerPage.acceptTermsCheckbox.check();
  registerPage.submitBtn.click();
  
  //registerPage.firstNameInputField.type(firstName);
  registerPage.firstNameInputField.should('have.value', firstName);
  //registerPage.lastNameInputField.type(lastName);
  registerPage.lastNameInputField.should('have.value', lastName);
  //registerPage.emailInputField.type(userEmail);
  registerPage.emailInputField.should('have.value', userEmail);
  
})

it("Negative case - Using invalid email", () => {
  cy.visit('/register');
  var pass = faker.internet.password();
  
  registerPage.firstNameInputField.type(faker.name.firstName());
  registerPage.lastNameInputField.type(faker.name.lastName());
  registerPage.emailInputField.type(faker.name.firstName());
  registerPage.passwordInputField.type(pass);
  registerPage.passwordConfirmationInputField.type(pass);
  registerPage.acceptTermsCheckbox.check();
  registerPage.submitBtn.click();

})

it("Negative case - Using invalid password", () => {
  cy.visit('/register');



  registerPage.firstNameInputField.type(faker.name.firstName());
  registerPage.lastNameInputField.type(faker.name.lastName());
  registerPage.emailInputField.type(faker.internet.email());
  registerPage.passwordInputField.type('t');
  registerPage.passwordConfirmationInputField.type('test1234');
  registerPage.acceptTermsCheckbox.check();
  registerPage.submitBtn.click();

})

it("Negative case - Using invalid password confirmation", () => {
  cy.visit('/register');
  registerPage.firstNameInputField.type(faker.name.firstName());
  registerPage.lastNameInputField.type(faker.name.lastName());
  registerPage.emailInputField.type(faker.internet.email());
  registerPage.passwordInputField.type(faker.internet.password());
  registerPage.passwordConfirmationInputField.type(faker.internet.password());
  registerPage.acceptTermsCheckbox.check();
  registerPage.submitBtn.click();

})

it("Negative case - Terms and conditions are not accepted", () => {
  cy.visit('/register');
  var pass = faker.internet.password();
  registerPage.firstNameInputField.type(faker.name.firstName());
  registerPage.lastNameInputField.type(faker.name.lastName());
  registerPage.emailInputField.type(faker.internet.email());
  registerPage.passwordInputField.type(pass);
  registerPage.passwordConfirmationInputField.type(pass);
  registerPage.acceptTermsCheckbox.uncheck();
  registerPage.submitBtn.click();

})

it("Negative case - Leave email field empty", () => {
  cy.visit('/register');
  var pass = faker.internet.password();
  registerPage.firstNameInputField.type(faker.name.firstName());
  registerPage.lastNameInputField.type(faker.name.lastName());
  registerPage.emailInputField.type(faker.name.firstName());
  registerPage.passwordInputField.type(pass);
  registerPage.passwordConfirmationInputField.type(pass);
  registerPage.acceptTermsCheckbox.check();
  registerPage.submitBtn.click();

})
})
