import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import cls_Header_Bar from "../../POM/cls_Header_Bar";
import cls_Login from "../../POM/cls_Login";
import cls_Inicio_Home from "../../POM/cls_Inicio_Home";

var distribuidores = [];

Given("que el usuario se encuentra en el Inicio", function () {
    cy.url().should("include", "/inicio");
});
When("haga clic en cambiar punto de entrega", function () {
    cls_Inicio_Home.get.btn_Cambiar_Punto().click();
});
Then(
    "se debe mostrar un popup para seleccionar el punto de entrega",
    function () {
        cls_Inicio_Home.get.popup_Punto_Entrega.me().should("be.visible");
    }
);
When("el usuario Establecimiento seleccione un punto de entrega", function () {
    cls_Inicio_Home.get.popup_Punto_Entrega.ddl_Punto_Entrega().select(0);
    cy.intercept("GET", "/api/distribuidores_aprobados_por_punto/**").as(
        "Distribuidores"
    );
});
When("haga clic en el botón listo", function () {
    cls_Inicio_Home.get.popup_Punto_Entrega.btn_Listo().click();
});
Then("el usuario podrá ver los distribuidores asociados", function () {
    cy.log("Probando ascersión de nombres 3");
    cy.wait("@Distribuidores").then((the) => {
        cy.wrap(the.response.statusCode).should("satisfy", (statusCode) => {
            // Verificar que el código de respuesta sea 200 o 304
            return statusCode === 200 || statusCode === 304;
        });
        const body = the.response.body.data;
        if (Array.isArray(body)) {
            distribuidores = body.map(
                (distribuidor) => distribuidor.distribuidor.nombre
            );

            distribuidores.forEach((nombre) => {
                cy.get("p.info-dist").contains(nombre).should("be.visible");
            });
        }
    });
});
