class CriarUsuarioPage {
    inputName = ".sc-himrzO.fhGhLZ input[name='name']";
    inputEmail = ".sc-himrzO.fhGhLZ input[name='email']";

    cadName (name="Mercury") {
        cy.get(this.inputName).type(name, { force: true });
    }

    cadEmail (email="rock@email.com") {
        cy.get(this.inputEmail).type(email, {force: true});
    }
    
    clickNovo () {
        cy.contains("Novo").click({force: true});
    }
    
    cadComSucesso (nameAleatorio, emailAleatorio) {
        var currentTimeInMilliseconds = Date.now();
        var nameAleatorio = "Mercury";
        var emailAleatorio = currentTimeInMilliseconds + "@gmail.com";

        cy.get(this.inputName).type(nameAleatorio, { force: true });
        cy.get(this.inputEmail).type(emailAleatorio, {force: true});
        cy.contains("button", "Salvar").click({force: true});
    }

    cadUser (usuario, email) {
        cy.get(this.inputName).type(usuario, { force: true });
        cy.get(this.inputEmail).type(email, {force: true});
        cy.contains("button", "Salvar").click({force: true});
    }

    cadTabela (nome, email) {
        cy.get(this.inputName).type(nome, { force: true });
        cy.get(this.inputEmail).type(email, {force: true});
        cy.contains("button", "Salvar").click({force: true});
    }

    botaoSalvar () {
        cy.contains("button", "Salvar").click({force: true});
    }

    validaCadastro () {
        cy.contains("Usuário salvo com sucesso!");
    }

}

export var criarUsuarioPage = new CriarUsuarioPage();