class cls_Pedidos {
    get = {
        ddl_Punto_Entrega: () => cy.get("select.selectPunto"),
    };
}

export default cls_Pedidos = new cls_Pedidos();
