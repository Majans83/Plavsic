/// <reference types="Cypress" />

import { commonElements } from "../page_object/commonElements";
import { loginPage } from "../page_object/login";
import { createGallery } from "../page_object/creategallery";
import { loginUser } from "../page_object/login";
import { navigationBar } from "../page_object/navigationBar";

describe ("Create gallery", () => {
        beforeEach
        ('Login to the app', () => {
      cy.visit('/login')
      loginPage.loginUser('emi2019@gmail.com', 'test1234', '.btn');
      cy.wait(2000);
    
        })

    it("Positive case - Successful add gallery", () => {
      cy.visit('/create');
      createGallery.titleInputField.type('Pretty flowers gallery');
      createGallery.descriptionInputField.type('Flowers');
      createGallery.imagePlaceholder.type('https://zadovoljna.nova.rs/wp-content/uploads/2021/09/27/1632730123-profimedia-0468444515-750x500.jpg');
      createGallery.submitBtn.click();
    

    cy.visit('/my-galleries').should('exist');
    createGallery.cell.should('exist');
    navigationBar.loginBtn.should('not.exist');
    navigationBar.logoutBtn.should('be.visible');
    createGallery.headingText.should('have.text', 'My Galleries');

  })

  it.only("Positive case - Successful add gallery leaving description field empty", () => {
    cy.visit('/create');
    createGallery.titleInputField.type('Pretty flowers gallery');
    createGallery.imagePlaceholder.type('https://zadovoljna.nova.rs/wp-content/uploads/2021/09/27/1632730123-profimedia-0468444515-750x500.jpg');
    createGallery.submitBtn.click();

    cy.visit('/my-galleries').should('exist');
    createGallery.cell.should('exist');
    navigationBar.loginBtn.should('not.exist');
    navigationBar.logoutBtn.should('be.visible');
    createGallery.headingText.should('have.text', 'My Galleries');
    createGallery.alert.should('not.exist');


  })

  it("Negative case - Wrong image format", () => {
    cy.visit('/create');
    createGallery.titleInputField.type('Pretty flowers gallery');
    createGallery.descriptionInputField.type('Flowers');
    createGallery.imagePlaceholder.type('https://www.thisiscolossal.com/wp-content/uploads/2014/03/120430.gif');
    createGallery.submitBtn.click();

    createGallery.titleInputField.should('have.value', 'Pretty flowers gallery');
    createGallery.descriptionInputField.should('have.value', 'Flowers');
    createGallery.alert.should('be.visible')
    .and('have.text', 'Wrong format of image');
    
  })

  it("Negative case - Wrong title", () => {
    cy.visit('/create');
    createGallery.titleInputField.type('N');
    createGallery.descriptionInputField.type('Flowers');
    createGallery.imagePlaceholder.type('https://zadovoljna.nova.rs/wp-content/uploads/2021/09/27/1632730123-profimedia-0468444515-750x500.jpg');
    createGallery.submitBtn.click();
    
    cy.url().should('contains', '/create');
    createGallery.alert.should('be.visible')
    .and('have.text', 'The title must be at least 2 characters.');
    createGallery.headingText.should('not.have.text', 'All Galleries');
    

  })


  })
  