const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://gallery-app.vivifyideas.com/',
    env: {
      registeredUserEmail: "emi2019@gmail.com",
      validPassword: "test1234",
      unregisteredUserEmail: "emi2020@gmail.com",
      passwordTooShort: "test"

    }
  },
});
