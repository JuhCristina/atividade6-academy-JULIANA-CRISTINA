Feature: Criar
    Como uma pessoa qualquer
    Desejo registrar informações de usuário
    Para poder manipular estas informações livremente

Background: Acesso ao site e clico em Novo
    Given acessei a tela inicial
    And cliquei em novo registro

Scenario: As informações necessárias para cadastrar um usuário são: nome e email.
    When informo usuário e email para novo cadastro
    Then visualizo a mensagem de sucesso "Usuário salvo com sucesso!"

Scenario: Não deve ser possível cadastrar um usuário sem informar um e-mail
    When informo usuário e não informo um email para cadastro
    | user   | Queen                   |
    | mail   | rockinroll@email.com    |
    Then visualizo a mensagem de erro no cadastro "O campo e-mail é obrigatório."

Scenario: Não deve ser possível cadastrar um usuário sem informar um nome
    When não informo um usuário e informo um email
    | user   | Queen                   |
    | mail   | rockinroll@email.com    |
    Then visualizo a mensagem de erro no cadastro em usuario "O campo nome é obrigatório."

Scenario: Se o e-mail informado possuir um formato inválido, a operação de registro deverá ser cancelada.
    When informo usuário e email com formato inválido
    Then visualizo a mensagem de erro "Formato de e-mail inválido"

Scenario: Não deve ser possível cadastrar um usuário com e-mail já utilizado no cadastro de outro usuário..
    When informo usuário e email já existente para cadastro
    Then visualizo a mensagem de erro de duplicidade "Erro"

Scenario: Se houver a tentativa de cadastrar um usuário com e-mail já existente, o processo deverá ser bloqueado com a mensagem: User already exists.
    When informo usuário e email já existente para cadastro
    Then visualizo a mensagem de "User already exists."

Scenario: Não deve ser possível cadastrar um nome com mais de 100 caracteres.
    When informo usuário com mais de 100 caracteres e email
    | user   | Queeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeen    |
    | mail   | roll@email.com                                                                                           |
    Then visualizo a mensagem de erro de usuario "Informe no máximo 100 caracteres para o nome"

Scenario: Não deve ser possível cadastrar um e-mail com mais de 60 caracteres.
    When informo usuário e email com mais de 60 caracteres
    | user   | Queen                                                          |
    | mail   | queeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeen@email.com  |
    Then visualizo a mensagem de erro de email "Informe no máximo 60 caracteres para o e-mail"