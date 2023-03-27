/// <reference types="Cypress" />

// const locators = require('../fixtures/locators.json')

import { registerPage } from "../page_object/registerPage";

import { faker } from '@faker-js/faker';
import { loginPage } from "../page_object/login";
import { navigationBar } from "../page_object/navigationBar";

describe ("Register page", () => {

  beforeEach(() => {
   cy.visit('/register');
   cy.url().should('contains','/register');
  });

  it('Check UI elements of Register page', () => {
    registerPage.headingText.should('have.text', 'Register')
  })
  it("Visit register page", () => {
      

  });
it("Positive case - Successful registration", () => {
  cy.visit('/register');

  registerPage.firstNameInputField.type('majatest2019');
  registerPage.lastNameInputField.type('majatest9102');
  registerPage.emailInputField.type('emili2019@gmail.com');
  registerPage.passwordInputField.type('test1234');
  registerPage.passwordConfirmationInputField.type('test1234');
  registerPage.acceptTermsCheckbox.check();
  registerPage.submitBtn.click();

  
  registerPage.firstNameInputField.should('have.value', 'majatest2019');
  registerPage.lastNameInputField.should('have.value', 'majatest9102');
  registerPage.emailInputField.should('have.value', 'emili2019@gmail.com');
  
  cy.url().should('not.include', '/register');
  navigationBar.registerBtn.should('not.exist');
  navigationBar.loginBtn.should('not.exist');
  navigationBar.logoutBtn.should('be.visible');
  registerPage.headingText.should('have.text', 'All Galleries')
}) 
})

it("Negative case - Using invalid email", () => {
  cy.visit('/register');
  var pass = faker.internet.password();
  registerPage.firstNameInputField.type(faker.name.firstName());
  registerPage.lastNameInputField.type(faker.name.lastName());
  registerPage.emailInputField.type('emili2019@gmail.com');
  registerPage.passwordInputField.type(pass);
  registerPage.passwordConfirmationInputField.type(pass);
  registerPage.acceptTermsCheckbox.check();
  registerPage.submitBtn.click();

  cy.url().should('contain','/register');
registerPage.errorAlert.should('be.visible')
.and('have.text', 'The email has already been taken.')
.and('have.css', 'color', 'rgb(114, 28, 36)');

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

  cy.url().sholud('include', '/register');
registerPage.errorAlert.should('be.visible')
.and('have.text', 'The password must be at least 8 characters.')
.and('have.css', 'background-color', 'rgb(248, 215, 218)');
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

it.only("Negative case - Terms and conditions are not accepted", () => {
  cy.visit('/register');
  var pass = faker.internet.password();
  registerPage.firstNameInputField.type(faker.name.firstName());
  registerPage.lastNameInputField.type(faker.name.lastName());
  registerPage.emailInputField.type(faker.internet.email());
  registerPage.passwordInputField.type(pass);
  registerPage.passwordConfirmationInputField.type(pass);
  registerPage.acceptTermsCheckbox.uncheck();
  registerPage.submitBtn.click();

  registerPage.errorAlert.should('be.visible')
  .and('have.text', 'The terms and conditions must be accepted.');

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

