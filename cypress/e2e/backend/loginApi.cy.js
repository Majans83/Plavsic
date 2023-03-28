/// <reference types="Cypress" />

const common = require('mocha/lib/interfaces/common');
const data = require('../../fixtures/data.json');

describe('Login via api', () => {

    before(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
    });

    beforeEach(() => {
        const {registereduserEmail, validPassword} =Cypress.env();
        const userEmail = Cypress.env('registeredUserEmail');
        const password = Cypress.env('validPassword');

        cy.loginViaAPI(userEmail, password);
        cy.wait(2000);
    })

    it('Poseti My galleries page', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://gallery-api.vivifyideas.com/api/my-galleries?page=1&term='
        }).as('homePageLoaded');
        cy.visit('')
        commonElements.headingText.should('have.text', 'All galleries');
        cy.wait('@homepageloaded').then((intercept) => {
            cy.log(intercept);
            const status = intercept.response.statusCode;
            const statusMsg = intercept.response.statusMessage;
            const numberofGalleries = intercept.response.body.numberofGalleries
            cy.log(numberofGalleries);


            expect(status).to.eq(200);
            expect(statusMsg).to.eq('OK');
            expect(numberofGalleries.length).eq(10)


        })
    })
})