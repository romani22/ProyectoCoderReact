import Swal from 'sweetalert2';
const TicketPurchase = ({ Orden, montoFinal }) => {
	Swal.fire({
		icon: 'success',
		html: `<div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
                    <h4>Número de orden ${Orden.id}</h4>
                    <table style="width: 90%;"> 
                        <thead>
                                <tr>
                                    <th style="text-align: left;">Producto</th>
                                    <th style="text-align: center;">Cant.</th>
                                    <th style="text-align: right;">Precio</th>
                                </tr>
                        </thead>
                        <tbody>
                                ${Orden.items
												.map(
													(producto) => `
                                <tr>
                                    <td style="text-align: left;">${producto.nombre}</td>
                                    <td style="text-align: center;">${producto.cantidad}</td>
                                    <td style="text-align: right;">$ ${(producto.precio * producto.cantidad).toFixed(2)}</td>
                                </tr>`
												)
												.join('')}
                                <tr>
                                    <td style="text-align: left;"></td>
                                    <td style="text-align: center;"><strong>Total:</strong></td>
                                    <td style="text-align: right;">$ ${montoFinal.toFixed(2)}</td>
                                </tr>
                        </tbody>
                    </table>
                </div>`,
		title: 'Orden de compra',
		width: '50%',
		showConfirmButton: true,
		ConfirmButtonText: 'cerrar',
		allowOutsideClick: false,
	});
};

export default TicketPurchase;
