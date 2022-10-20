const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 80000,
  e2e: {
    baseUrl: 'https://www.rapha.cc/gb/en/womens-trail-windblock-jersey/product/WTW01XX',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],

  }
}) 