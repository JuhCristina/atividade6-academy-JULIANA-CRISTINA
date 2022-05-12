Feature: Listar
    Como uma pessoa qualquer
    Desejo consultar os dados de um usuário
    Para visualizar as informações deste usuário

Background: Acesso ao site e clico em Novo
    Given acessei a tela inicial

Scenario: O usuário deve ser localizado através de seu identificador único.
    When pesquiso um usuário ou email
    Then visualizo usuarios com o nome pesquisado

Scenario: O usuário també deve ser localizado através de seu email único.
    When pesquiso um usuário por email
    Then visualizo o usuario com o email pesquisado

Scenario: Se o usuário não puder ser localizado pelo identificador, o serviço deve retornar um indicador de que o usuário não foi localizado.
    When pesquiso por um usuário ou email inexistente
    Then visualizo a mensagem de usuário não encontrado "Ops! Não existe nenhum usuário para ser exibido."
    And visualizo uma opção para cadastrar um usuário

Scenario: Após realizar a pesquisa deve ser possível retornar á página inicial limpando a pesquisa
    When pesquiso um usuário ou email
    Then visualizo usuarios com o nome pesquisado
    And retorno a página inicial

Scenario: Devem ser apresentados para o cliente todas as informações dos usuários que possuem em seu nome ou email o conteúdo pesquisado.
    When pesquiso um usuário ou email com parte de texto
    Then visualizo usuarios com o parte do texto pesquisado

Scenario: Todos as informações de usuários cadastrados devem ser fornecidas após a consulta.
    When deve ser listado todos os usuarios cadastrados
    Then visualizo todos os usuarios

Scenario: Caso não existam usuários cadastrados, deve existir uma opção para cadastrar um usuário.
    When não tem cadastro de usuarios
    Then visualizo a opção de cadastrar um novo usuario