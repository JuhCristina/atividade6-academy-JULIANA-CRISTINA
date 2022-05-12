/// <reference types="cypress" />
import { atualizarUsuarioPage } from "../pages/atualizarUsuarioPage.po";

Given("acessei a tela inicial", () => {
    cy.visit("https://academy-crud-frontend.herokuapp.com/users");
});

When("informo usuário ou email para atualizar", () => {
    cy.interceptarAtualizar();
    cy.wait(1000);
    atualizarUsuarioPage.pesquisaName("Queen");

});

Then("visualizo o usuário com sucesso", () => {
    cy.contains("Queen");
});

When("informo um usuário não cadastrado para atualizar", () => {
    atualizarUsuarioPage.tempo();
    atualizarUsuarioPage.pesquisaName("Barata Voadora");
});

Then("visualizo a mensagem {string}", (mensagemErroUsuario) => {
    cy.contains(mensagemErroUsuario).should("be.visible");
});

When("localizo usuário para atualizar", () => {
    atualizarUsuarioPage.criarUsuarioParaTeste();
    atualizarUsuarioPage.pesquisaName("Clarice");
});

And("atualizo nome e email", () => {
    var currentTimeInMilliseconds = Date.now();
    var emailAleatorio = currentTimeInMilliseconds + "@gmail.com";

    atualizarUsuarioPage.botaoDetalhes();
    atualizarUsuarioPage.botaoEditar();
    atualizarUsuarioPage.atualizarDados("Clarice Lins", emailAleatorio);
});

Then("visualizo a mensagem de usuário atualizado {string}", (mensagemUsuarioAtualizado) => {
    cy.contains(mensagemUsuarioAtualizado).should("be.visible");
});

And("atualizo nome e apago email", () => { 
    atualizarUsuarioPage.tempo();
    atualizarUsuarioPage.botaoDetalhes();
    atualizarUsuarioPage.botaoEditar();

    atualizarUsuarioPage.limparNome();
    atualizarUsuarioPage.atualizaNome("Clarice Lins");
    atualizarUsuarioPage.limparEmail();
    atualizarUsuarioPage.botaoSalvar();
});
    
Then("visualizo a mensagem de erro no campo email {string}", (mensagemEmailObrigatorio) => {
        cy.contains(mensagemEmailObrigatorio).should("be.visible");
});

And("apago nome e atualizo email", () => { 
    var currentTimeInMilliseconds = Date.now();
    var emailAleatorio = currentTimeInMilliseconds + "@gmail.com";
    
    atualizarUsuarioPage.tempo();
    atualizarUsuarioPage.botaoDetalhes();
    atualizarUsuarioPage.botaoEditar();
    
    atualizarUsuarioPage.limparNome();
    atualizarUsuarioPage.limparEmail();
    atualizarUsuarioPage.atualizaEmail(emailAleatorio);
    atualizarUsuarioPage.botaoSalvar();
});
        
Then("visualizo a mensagem de erro no campo nome {string}", (mensagemNomeObrigatorio) => {
    cy.contains(mensagemNomeObrigatorio).should("be.visible");
});

And("Atualizo nome e atualizo email com formato inválido", () => { 
    var currentTimeInMilliseconds = Date.now();
    var emailAleatorio = currentTimeInMilliseconds + "gmail.com";
    
    atualizarUsuarioPage.tempo();
    atualizarUsuarioPage.botaoDetalhes();
    atualizarUsuarioPage.botaoEditar();
    
    atualizarUsuarioPage.limparNome();
    atualizarUsuarioPage.atualizaNome("Clarice Lins");
    atualizarUsuarioPage.limparEmail();
    atualizarUsuarioPage.atualizaEmail(emailAleatorio);
    atualizarUsuarioPage.botaoSalvar();
});
        
Then("visualizo a mensagem de erro no campo email {string}", (mensagemFormato) => {
    cy.contains(mensagemFormato).should("be.visible");
});

When("informo usuário e email já existente", () => { 
    var nameAleatorio = "Marcolina"
    var currentTimeInMilliseconds = Date.now();
    var emailAleatorio = currentTimeInMilliseconds + "marcolina@gmail.com"

    atualizarUsuarioPage.criarUserSimples(nameAleatorio, emailAleatorio);
    
    atualizarUsuarioPage.pesquisaName("Clarice");
    atualizarUsuarioPage.botaoDetalhes();
    atualizarUsuarioPage.botaoEditar();
    
    atualizarUsuarioPage.limparEmail();
    atualizarUsuarioPage.atualizaEmail(emailAleatorio);
    atualizarUsuarioPage.botaoSalvar();
});

Then("visualizo a mensagem de erro de duplicidade {string}", (mensagemFormato) => {
    cy.contains(mensagemFormato).should("be.visible");
});

And("visualizo a mensagem de {string}", () => {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users",
    {
    response: "User already exists."
});

});

And("Atualizo nome com mais de 100 caracteres", () => { 
    atualizarUsuarioPage.botaoDetalhes();
    atualizarUsuarioPage.botaoEditar();
        
    atualizarUsuarioPage.limparNome();
    atualizarUsuarioPage.atualizaNome("Queeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeen");
    atualizarUsuarioPage.botaoSalvar();
});
            
Then("visualizo a mensagem no campo nome {string}", (mensagem100Caracteres) => {
    cy.contains(mensagem100Caracteres).should("be.visible");
});

And("Atualizo email com mais de 60 caracteres", () => { 
    atualizarUsuarioPage.botaoDetalhes();
    atualizarUsuarioPage.botaoEditar();

    atualizarUsuarioPage.limparEmail();
    atualizarUsuarioPage.atualizaEmail("queeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeen@email.com");
    atualizarUsuarioPage.botaoSalvar();
});
            
Then("visualizo a mensagem no campo email {string}", (mensagem60Caracteres) => {
    cy.contains(mensagem60Caracteres).should("be.visible");
});

And("atualizo informações e cancelo operação", () => { 
    atualizarUsuarioPage.botaoDetalhes();
    atualizarUsuarioPage.botaoEditar();

    atualizarUsuarioPage.limparNome();
    atualizarUsuarioPage.atualizaNome("Giovana Paiva");
    atualizarUsuarioPage.botaoCancelar();
});

Then("visualizo que alteração não foi realizada", () => {
    cy.contains("button", "Editar").should("be.visible");
});