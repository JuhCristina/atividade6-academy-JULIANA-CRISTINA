/// <reference types="cypress" />
import { removerUsuarioPage } from "../pages/removerUsuarioPage.po";

Given("acessei a tela inicial", () => {
    cy.visit("https://academy-crud-frontend.herokuapp.com/users");
});

When("informo usuário ou email para ser removido", () => {
    cy.interceptarRemover();
    cy.wait(1000);
    removerUsuarioPage.pesquisaName("Mia");
});

And("removo o usuário", () => {
    removerUsuarioPage.botaoLixeira();
    removerUsuarioPage.botaoConfirmar();
});

Then("visualizo a mensagem de removido {string}", (mensagemExcluido) => {
    cy.contains(mensagemExcluido).should("be.visible");
});

When("informo usuário ou email já removido", () => {
    cy.interceptarRemover();
    cy.wait(1000);
    removerUsuarioPage.pesquisaName("João");
});

Then("visualizo a mensagem de usuário não existe {string}", (mensagemExcluido) => {
    cy.contains(mensagemExcluido).should("be.visible");
});