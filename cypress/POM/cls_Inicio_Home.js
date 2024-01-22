class cls_Inicio_Home {
	get = {
		btn_Cambiar_Punto: () => cy.get("#p-cambiar-ubicacion"),
		popup_Punto_Entrega: {
			me: () => cy.get("app-seleccionar-punto-entrega"),
			lbl_titulo: () =>
				cy
					.get("app-seleccionar-punto-entrega")
					.find(
						"h5:contains('Selecciona un punto de entrega para continuar')"
					),
			ddl_Punto_Entrega: () =>
				cy.get("app-seleccionar-punto-entrega").find("select"),
			btn_Listo: () =>
				cy
					.get("app-seleccionar-punto-entrega")
					.find("button:contains('Listo')"),
		},
	};
}

export default cls_Inicio_Home = new cls_Inicio_Home();
