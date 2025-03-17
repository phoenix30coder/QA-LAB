const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: true,
      html: true,
      json: true,
      embeddedScreenshots: true,
      inline: true

  },
  video: false,
  // screenshotOnRunFailure: true,
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
