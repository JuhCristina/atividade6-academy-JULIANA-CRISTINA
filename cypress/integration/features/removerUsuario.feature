Feature: Remover
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

Background: Acesso ao site
    Given acessei a tela inicial

Scenario: O usuário a ser removido deve ser localizado através de seu identificador único.
    When informo usuário ou email para ser removido
    And removo o usuário
    Then visualizo a mensagem de removido "Usuário removido!"

Scenario: um usuário não for localizado pelo identificador informado, o sistema deverá se comportar como se houvesse removido as informações do usuário.
    When informo usuário ou email já removido
    Then visualizo a mensagem de usuário não existe "Ops! Não existe nenhum usuário para ser exibido."