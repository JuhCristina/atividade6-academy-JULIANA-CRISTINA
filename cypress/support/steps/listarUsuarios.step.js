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

When("pesquiso um usuário por email", () => {
    listarUsuarioPage.cadTesteEmail();
    listarUsuarioPage.pesquisaName("thereason");
});

Then("visualizo o usuario com o email pesquisado", () => {
    cy.contains("therea").should("be.visible");
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

When("deve ser listado todos os usuarios cadastrados", () => {
    cy.interceptarListar();
    cy.visit("https://academy-crud-frontend.herokuapp.com/users");
});

Then("visualizo todos os usuarios", () => {
    cy.contains("Mia").should("be.visible");
    cy.contains("Fenix").should("be.visible");
    cy.contains("Queen").should("be.visible");
    cy.contains("ACDC").should("be.visible");
    cy.contains("Socorro").should("be.visible");
    cy.contains("Galvao").should("be.visible");
});

When("não tem cadastro de usuarios", () => {
    cy.interceptarVazio();
    cy.visit("https://academy-crud-frontend.herokuapp.com/users");
});

Then("visualizo a opção de cadastrar um novo usuario", () => {
    cy.contains("Cadastre um novo usuário").should("be.visible");
});