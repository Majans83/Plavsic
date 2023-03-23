class LoginPage {

    get emailInputField() {
        return cy.get('#email');
    }
    get passwordInputField () {
        return cy.get('#password');
    }
    get submitBtn () {
        return cy.get("button[type='submit']");
    }
    
get headingText() {
    return cy.get('.title-style');
}
loginUser(userEmail, password) {
    this.emailInputField.type(userEmail);
    this.passwordInputField.type(password);
    this.submitBtn.click();

}
}
export const loginPage = new LoginPage();