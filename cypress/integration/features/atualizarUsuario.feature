Feature: Atualizar
    Como uma pessoa qualquer
    Desejo atualizar as informações de determinado usuário
    Para ter o registro de suas informações atualizadas

Background: Acesso ao site
    Given acessei a tela inicial

Scenario: O usuário deve ser localizado através de seu identificador único.
    When informo usuário ou email para atualizar
    Then visualizo o usuário com sucesso

Scenario: Caso nenhum usuário seja localizado pelo identificador único, a atualização não deve ser realizada.
    When informo um usuário não cadastrado para atualizar
    Then visualizo a mensagem "Ops! Não existe nenhum usuário para ser exibido."

Scenario: As informações necessárias para atualizar um usuário são: nome e email.
    When localizo usuário para atualizar
    And atualizo nome e email
    Then visualizo a mensagem de usuário atualizado "Informações atualizadas com sucesso!"

Scenario: Não deve ser possível atualizar um usuário sem email.
    When localizo usuário para atualizar
    And atualizo nome e apago email
    Then visualizo a mensagem de erro no campo email "O campo e-mail é obrigatório."

Scenario: Não deve ser possível atualizar um usuário sem nome.
    When localizo usuário para atualizar
    And apago nome e atualizo email
    Then visualizo a mensagem de erro no campo nome "O campo nome é obrigatório."

Scenario: Não deve ser possível atualizar um usuário com formato de email inválido.
    When localizo usuário para atualizar
    And Atualizo nome e atualizo email com formato inválido
    Then visualizo a mensagem de erro no campo email "Formato de e-mail inválido"

Scenario: Não deve ser possível atualizar o e-mail de um usuário para um e-mail que já está em uso por outro usuário registrado.
    When informo usuário e email já existente
    Then visualizo a mensagem de erro de duplicidade "Erro"
    And visualizo a mensagem de "User already exists."

Scenario: Não deve ser possível atualizar um nome com mais de 100 caracteres.
    When localizo usuário para atualizar
    And Atualizo nome com mais de 100 caracteres
    Then visualizo a mensagem no campo nome "Informe no máximo 100 caracteres para o nome"

Scenario: Não deve ser possível atualizar um email com mais de 60 caracteres.
    When localizo usuário para atualizar
    And Atualizo email com mais de 60 caracteres
    Then visualizo a mensagem no campo email "Informe no máximo 60 caracteres para o e-mail"

Scenario: Não deve ser possível atualizar usuario em caso de cancelamento.
    When localizo usuário para atualizar
    And atualizo informações e cancelo operação
    Then visualizo que alteração não foi realizada