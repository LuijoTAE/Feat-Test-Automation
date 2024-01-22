import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import cls_Header_Bar from "../../POM/cls_Header_Bar";
import cls_Login from "../../POM/cls_Login";
import cls_Inicio_Home from "../../POM/cls_Inicio_Home";
import cls_Pedidos from "../../POM/cls_Pedidos";

Given("que el usuario se encuentra en el módulo pedidos", function () {
    cls_Header_Bar.get.link_Pedidos();
    cy.url().should("include", "pedidos");
});
When(
    "el usuario Establecimiento seleccione un punto de entrega desde el módulo pedidos",
    function () {
        cls_Pedidos.get.ddl_Punto_Entrega().select(1);
    }
);

Then(
    "el usuario Establecimiento podrá ver los pedidos asociados al punto de entrega",
    function () {
        cy.contains("Total pedidos ").should("be.visible");
    }
);
