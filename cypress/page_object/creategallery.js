class CreateGallery {

    get createButton () {
        return cy.get("a[href='/create']");
    }

   get titleInputField () {
    return cy.get('#title');
   }

   get descriptionInputField () {
    return cy.get('#description');
   }

   get imagePlaceholder () {

return cy.get('input[placeholder="image url"]');
   }

   get addImageBtn () {
    return cy.get("button[type='button']");
   }

   get submitBtn () {
    return cy.get('form > :nth-child(4)');
   }
    get cancelBtn () {
        return cy.get('button[class="btn btn-custom"]')
    }

    get headingText () {
        return cy.get('.title-style');
    }
    
    get alert () {
        return cy.get('p[class="alert alert-danger"]')
    }
    get cell () {
        return cy.get('div[class = "cell"]');
    }
}

export const createGallery = new CreateGallery();