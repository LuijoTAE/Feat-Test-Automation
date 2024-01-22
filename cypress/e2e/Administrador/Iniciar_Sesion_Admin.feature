Feature: Iniciar sesión Feat Administrador

  Scenario: Inicio de sesión exitoso para usuario Administrador
    Given que el usuario Administrador se encuentra en el login
    When el usuario Administrador ingrese credenciales correctas
    And haga clic en el botón Ingresar
    Then el usuario Administrador podrá iniciar sesión