class RegisterPage {

    get firstNameInputField () {
        return cy.get('#first-name');    
    }

    get lastNameInputField () {
        return cy.get('#last-name');
    }

    get emailInputField () {
        return cy.get('#email');
    }

    get passwordInputField () {
        return cy.get('#password');
    }

    get passwordConfirmationInputField () {
        return cy.get('#password-confirmation');
    }

    get acceptTermsCheckbox () {
        return cy.get('input[type="checkbox"]');
    }

    get submitBtn () {
        return cy.get('button[type="submit"]');
    }
}

export const registerPage = new RegisterPage();