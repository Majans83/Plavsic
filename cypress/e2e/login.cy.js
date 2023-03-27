/// <reference types="Cypress" />

import { loginPage } from "../page_object/login";
import { createGallery } from "../page_object/creategallery";

describe('Login page', () => {


    beforeEach(() => {
        cy.visit('/login');
        cy.url().should('contains', '/login');
    });


    it('Positive case - Successful login', () => {
        loginPage.emailInputField.type('emi2019@gmail.com');
        loginPage.passwordInputField.type('test1234');
        loginPage.submitBtn.click();


    });
    
      
    
        });
      
        




