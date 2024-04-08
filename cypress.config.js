const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    baseUrl: "http://localhost/wordpress",
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', 
     username : 'root',
    password : 'root',
   debugMode: true,
    screenshotOnRunFailure: false,
    trashAssetsBeforeRuns: false,
    videoCompression: true,
    video: true,
    downloadsFolder: "cypress/downloads",
    chromeWebSecurity: false,
    viewportHeight: 1000,
    viewportWidth: 1000,
    scrollBehavior: "top",
    supportFile: "cypress/support/e2e.js",
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: true,
      html: true,
      json: true,
    },
  },
});

