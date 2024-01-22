import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import cls_Header_Bar from "../../POM/cls_Header_Bar";
import cls_Login from "../../POM/cls_Login";

const wait = 1000;

//! Background
Given("que el usuario Establecimiento se encuentra logueado", function () {
    cls_Login.Establecimiento();
});

Given("que el usuario se encuentra en el login", function () {
    cy.visit("/home");
    cls_Header_Bar.get.link_Ingresar();
    cy.url().should("contain", "login");
});
When("el usuario Establecimiento ingrese credenciales correctas", function () {
    cy.wait(wait);
    cy.fixture("Credenciales").then((the) => {
        cls_Login.get.txt_Email().type(the.Usuario_Establecimiento);
        cls_Login.get.txt_Clave().type(the.Clave);
    });
});
When("el usuario Distribuidor ingrese credenciales correctas", function () {
    cy.wait(wait);
    cy.fixture("Credenciales").then((the) => {
        cls_Login.get.txt_Email().type(the.Usuario_Distribuidor);
        cls_Login.get.txt_Clave().type(the.Clave);
    });
});
When("el usuario Organización ingrese credenciales correctas", function () {
    cy.wait(wait);
    cy.fixture("Credenciales").then((the) => {
        cls_Login.get.txt_Email().type(the.Usuario_Organizacion);
        cls_Login.get.txt_Clave().type(the.Clave);
    });
});
When("haga clic en el botón Inicio de sesión", function () {
    cls_Login.get.btn_Inicio_Sesion().click();
});
Then("el usuario Establecimiento podrá iniciar sesión", function () {
    cy.url().should("include", "/inicio");
});

Given("que el usuario Administrador se encuentra en el login", function () {
    cy.visit("/admin/login");
});
When("el usuario Administrador ingrese credenciales correctas", function () {
    cy.wait(wait);
    cy.fixture("Credenciales").then((the) => {
        cls_Login.get.txt_Email().type(the.Usuario_Admin);
        cls_Login.get.txt_Clave().type(the.Clave_Admin);
    });
});
When("haga clic en el botón Ingresar", function () {
    cls_Login.get.btn_Ingresar().click();
});

Then("el usuario Administrador podrá iniciar sesión", function () {
    cy.url().should("include", "dashboard");
});
