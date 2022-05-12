/// <reference types="cypress" />
import { listarUsuarioPage } from "../pages/listarUsuariosPage.po";

Given("acessei a tela inicial", () => {
    cy.visit("https://academy-crud-frontend.herokuapp.com/users");
});

When("pesquiso um usuário ou email", () => {
    listarUsuarioPage.cadComSucesso();
    listarUsuarioPage.pesquisaName("Viviane");
});

Then("visualizo usuarios com o nome pesquisado", () => {
    cy.contains("Viviane");
});

When("pesquiso por um usuário ou email inexistente", () => {
    listarUsuarioPage.pesquisaName("Barata Voadora");
});

Then("visualizo a mensagem de usuário não encontrado {string}", (mensagemUsuarioNaoEncontrado) => {
    cy.contains(mensagemUsuarioNaoEncontrado).should("be.visible");
});

And("visualizo uma opção para cadastrar um usuário", () => {
    cy.contains("Cadastre um novo usuário").should("be.visible");
});

And("retorno a página inicial", () => {
    cy.wait(1000);
    listarUsuarioPage.botaoLimparPesquisa();
});

When("pesquiso um usuário ou email com parte de texto", () => {
    listarUsuarioPage.cadComSucesso();
    listarUsuarioPage.pesquisaName("vi");
});

Then("visualizo usuarios com o parte do texto pesquisado", () => {
    cy.contains("Viviane");
});