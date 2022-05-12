/// <reference types="cypress" />
import { criarUsuarioPage } from "../pages/criarUsuarioPage.po";

Given("acessei a tela inicial", () => {
    cy.visit("");
});

And("cliquei em novo registro", () => {
    criarUsuarioPage.clickNovo ();
});

When("informo usuário e email para novo cadastro", () => {
    criarUsuarioPage.cadComSucesso();
});

Then("visualizo a mensagem de sucesso {string}", (mensagemSucesso) => {
    cy.contains(mensagemSucesso).should("be.visible");
});

When("informo usuário e não informo um email para cadastro", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    
    criarUsuarioPage.cadName(dadosTabela.user);
    criarUsuarioPage.botaoSalvar ();
});

Then("visualizo a mensagem de erro no cadastro {string}", (mensagemSemEmail) => {
    cy.contains(mensagemSemEmail).should("be.visible");
});

When("não informo um usuário e informo um email", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    
    criarUsuarioPage.cadEmail(dadosTabela.email);
    criarUsuarioPage.botaoSalvar ();
});

Then("visualizo a mensagem de erro no cadastro em usuario {string}", (mensagemSemUser) => {
    cy.contains(mensagemSemUser).should("be.visible");
});

When("informo usuário e email com formato inválido", () => {
    criarUsuarioPage.cadUser("Queen", "queengmail.com.br");
});

Then("visualizo a mensagem de erro {string}", (mensagemErro) => {
    cy.contains(mensagemErro).should("be.visible");
});

When("informo usuário e email já existente para cadastro", () => {
    var currentTimeInMilliseconds = Date.now();
    var emailAleatorio = currentTimeInMilliseconds + "marcolina@gmail.com"

    criarUsuarioPage.cadUser("Marcolina", emailAleatorio);
    cy.wait(1000);

    criarUsuarioPage.cadUser("Silvana", emailAleatorio);

});

Then("visualizo a mensagem de erro de duplicidade {string}", (Duplicidade) => {
    cy.contains(Duplicidade).should("be.visible");
});

Then("visualizo a mensagem de {string}", () => {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users",
    {
    response: "User already exists."
});

});

When("informo usuário com mais de 100 caracteres e email", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarUsuarioPage.cadTabela(dadosTabela.user, dadosTabela.mail);
});

Then("visualizo a mensagem de erro de usuario {string}", (mensagemErroUsuario) => {
    cy.contains(mensagemErroUsuario).should("be.visible");
});

When("informo usuário e email com mais de 60 caracteres", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarUsuarioPage.cadTabela(dadosTabela.user, dadosTabela.mail);
});

Then("visualizo a mensagem de erro de email {string}", (mensagemErroEmail) => {
    cy.contains(mensagemErroEmail).should("be.visible");
});