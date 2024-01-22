Feature: Iniciar sesión Feat

  Background:
    Given que el usuario se encuentra en el login

  Scenario: Inicio de sesión exitoso para usuario Distribuidor
    When el usuario Distribuidor ingrese credenciales correctas
    And haga clic en el botón Inicio de sesión
    Then el usuario Establecimiento podrá iniciar sesión