// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add("interceptarRemover", () => {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
        fixture: "remover.json"
    })
});

Cypress.Commands.add("interceptarAtualizar", () => {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
        fixture: "atualizar.json"
    })
});

Cypress.Commands.add("interceptarListar", () => {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
        fixture: "listar.json"
    })
});

Cypress.Commands.add("interceptarVazio", () => {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", 
    [])
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
