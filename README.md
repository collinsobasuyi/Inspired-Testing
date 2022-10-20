# Inspired-Testing

# Environment set up
1. Install chrome browser
2. install node.js
3. install git
4. install IDE (Visual studio code)

# Cypress installation
0. npm init
1. npm install
1. npm install cypress --save-dev
2. npx cypress open

# Documents
1. Cypress configuration https://docs.cypress.io/guides/references/configuration.html#Options

# Simple rules best practices
- A rule of thumb is to ask yourself this:
- If the content of the element changed would you want the test to fail?
- If the answer is yes: then use cy.contains()
- If the answer is no: then use a data attribute. 