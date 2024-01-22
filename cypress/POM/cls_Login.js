class cls_Login {
    get = {
        txt_Email: () => cy.get("input[name='email']"),
        txt_Clave: () => cy.get("input[name='password']"),
        btn_Inicio_Sesion: () =>
            cy.get("span:contains(' Inicia sesión ')").parent("button"),
        btn_Ingresar: () => cy.get("button"),
    };

    Establecimiento() {
        cy.visit("/login");
        cy.fixture("Credenciales").then((the) => {
            this.get.txt_Email().type(the.Usuario_Establecimiento);
            this.get.txt_Clave().type(the.Clave);
        });
        this.get.btn_Inicio_Sesion().click();
    }
}

export default cls_Login = new cls_Login();
