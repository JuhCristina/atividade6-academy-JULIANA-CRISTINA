class AtualizarUsuarioPage {
    inputPesquisa = ".sc-eCYdqJ.cpEPLY .sc-gKXOVf.fwTBzl";
    inputNameAtualizado = ".sc-papXJ.fYhSUh #userName";
    inputEmailAtualizado = ".sc-papXJ.fYhSUh #userEmail";
    inputName = ".sc-himrzO.fhGhLZ input[name='name']";
    inputEmail = ".sc-himrzO.fhGhLZ input[name='email']";

    pesquisaName (name) {
        cy.get(this.inputPesquisa).type(name, { force: true });
    }

    pesquisaEmail (email="rock@email.com") {
        cy.get(this.inputPesquisa).type(email, {force: true});
    }

    limparNome () {
        cy.get(".sc-papXJ.fYhSUh #userName").clear();
    }

    limparEmail () {
        cy.get(".sc-papXJ.fYhSUh #userEmail").clear();
    }

    atualizaNome (nome) {
        cy.get(".sc-papXJ.fYhSUh #userName").type(nome, { force: true });
    }

    atualizaEmail (email) {
        cy.get(".sc-papXJ.fYhSUh #userEmail").type(email, { force: true });
    }

    tempo () {
        cy.wait(1000);
    }

    botaoLimparPesquisa () {
        cy.get(".sc-eCYdqJ.cpEPLY .sc-jSMfEi.jKCCLF").click({force: true});
    }

    botaoDetalhes () {
        cy.get("#userDataDetalhe").click({force: true});
    }

    botaoEditar () {
        cy.contains("button", "Editar").click({force: true});
    }

    botaoSalvar () {
        cy.contains("button", "Salvar").click();
    }

    botaoCancelar () {
        cy.contains("button", "Cancelar").click();
    }

    atualizarDados (name, email) {
        cy.get(this.inputNameAtualizado).clear();
        cy.get(this.inputNameAtualizado).type(name, { force: true });
        cy.get(this.inputEmailAtualizado).clear();
        cy.get(this.inputEmailAtualizado).type(email, { force: true });
        cy.contains("button", "Salvar").click();
    }

    apagarDados () {
        cy.get(this.inputNameAtualizado).clear();
        cy.get(this.inputEmailAtualizado).clear();
    }

    criarUsuarioParaTeste (nameAleatorio, emailAleatorio) {
        var nameAleatorio = "Clarice"
        var currentTimeInMilliseconds = Date.now();
        var emailAleatorio = currentTimeInMilliseconds + "@gmail.com"

        cy.visit("");
        cy.contains("Novo").click({force: true});
        cy.get(this.inputName).type(nameAleatorio, { force: true });
        cy.get(this.inputEmail).type(emailAleatorio, {force: true});
        cy.contains("button", "Salvar").click({force: true});
        cy.wait(1000);
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
    }

    criarUserSimples (nome, email) {
        cy.visit("");
        cy.contains("Novo").click({force: true});
        cy.get(this.inputName).type(nome, { force: true });
        cy.get(this.inputEmail).type(email, {force: true});
        cy.contains("button", "Salvar").click({force: true});
        cy.wait(1000);
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
    }

}

export var atualizarUsuarioPage = new AtualizarUsuarioPage();