Feature: Seleccionar punto de venta

Background: 
  Given que el usuario Establecimiento se encuentra logueado
Scenario: Seleccionar punto de venta desde el home
  Given que el usuario se encuentra en el Inicio
  When haga clic en cambiar punto de entrega
  Then se debe mostrar un popup para seleccionar el punto de entrega
  When el usuario Establecimiento seleccione un punto de entrega
  And haga clic en el botón listo
  Then el usuario podrá ver los distribuidores asociados

Scenario: Seleccionar punto de venta desde el módulo pedidos
  Given que el usuario se encuentra en el módulo pedidos
  When el usuario Establecimiento seleccione un punto de entrega desde el módulo pedidos
  Then el usuario Establecimiento podrá ver los pedidos asociados al punto de entrega

