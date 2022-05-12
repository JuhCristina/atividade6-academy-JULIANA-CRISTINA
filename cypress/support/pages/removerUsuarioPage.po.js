class RemoverUsuarioPage {
    inputPesquisa = ".sc-eCYdqJ.cpEPLY .sc-gKXOVf.fwTBzl";
    inputName = ".sc-himrzO.fhGhLZ input[name='name']";
    inputEmail = ".sc-himrzO.fhGhLZ input[name='email']";

    pesquisaName (name) {
        cy.get(this.inputPesquisa).type(name, { force: true });
    }

    pesquisaEmail (email) {
        cy.get(this.inputPesquisa).type(email, {force: true});
    }

    botaoLixeira () {
        cy.get(".sc-kgflAQ.vggQs svg").eq(0).click();
    }

    botaoConfirmar () {
        cy.contains("button", "Confirmar").click({ force: true });
    }

    criarUsuarioParaRemover (nameAleatorio, emailAleatorio) {
        var nameAleatorio = "Brian O Conner"
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

}

export var removerUsuarioPage = new RemoverUsuarioPage();