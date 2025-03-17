const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // reporter: "mochawesome",
  
  reporter: "cypress-multi-reporters",
  screenshotsFolder:"cypress/reports/reports/assets",
  reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quite: true,
      overwrite: false,
      html: false,
      json: true,
      },
  },
  video: false,
  screenshotOnRunFailure: true,
  screenshotsFolder:"cypress/reports/mochareports/assets",
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // Attach screenshots to test failures
      on('after:screenshot', (details) => {
        console.log("Screenshot taken:", details.path);
      });
      return config;
    },
    specPattern: 'cypress/integration/**/*.js',
    downloadsFolder: 'cypress/downloads',
  },
});


//127.0.0.1:53389