class cls_Header_Bar {
    get = {
        link_Ingresar: () => cy.get("a:contains('Ingresa')").click(),
        link_Pedidos: () => cy.get("a:contains('Pedidos')").click(),
        link_Home: () => cy.get("a:contains('Home')").click(),
    };
}

export default cls_Header_Bar = new cls_Header_Bar();
