import { useContext, useState } from 'react';
import { CartShopContext } from '../../contexts/CartShop';
import CardShop from '../CardShop';
import { useEffect } from 'react';
import styles from './Checkout.module.css';
import { Backdrop, Button, CircularProgress, Divider, Skeleton } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../../db/firebase-config';
import Swal from 'sweetalert2';
import '../../../node_modules/sweetalert2/dist/sweetalert2.css';
import CardUserData from '../CardUserData';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
const Checkout = () => {
	const { cartItems, cleanAllCart } = useContext(CartShopContext);
	const [montoFinal, setMontoFinal] = useState(0);
	const [Loading, setLoading] = useState(true);
	const [ViewEmpty, setViewEmpty] = useState(true);
	const [open, setOpen] = useState(false);
	const [openLoader, setOpenLoader] = useState(false);
	const [Orden, setOrden] = useState({});
	const orderCollectionRef = collection(db, 'orders');

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const handleSave = (UserData) => {
		setOrden({
			id: (Math.random() * 10000000).toString().substring(0, 7),
			items: cartItems.map((producto) => ({
				id: producto.id,
				nombre: producto.nombre,
				cantidad: producto.cantidad,
				precio: producto.precio,
			})),
			UserData: UserData,
			date: Date(),
			status: 'generada',
		});
	};

	useEffect(() => {
		if (Object.keys(Orden).length > 0) {
			setOpenLoader(true);
			addDoc(orderCollectionRef, Orden)
				.then(() => {
					setOpenLoader(false);
					Swal.fire({
						icon: 'success',
						html: `<div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
									<h4>Número de orden ${Orden.id}</h4>
									<table>
										<thead>
												<tr>
												<th tyle="text-align: left;">Producto</th>
												<th tyle="text-align: center;">Cant.</th>
												<th tyle="text-align: right;">Precio</th>
												</tr>
										</thead>
										<tbody>
												${Orden.items
													.map(
														(producto) => `
												<tr>
													<td style="text-align: left;">${producto.nombre}</td>
													<td style="text-align: center;">${producto.cantidad}</td>
													<td style="text-align: right;">$ ${producto.precio}</td>
												</tr>`
													)
													.join('')}
												<tr>
													<td style="text-align: left;"><strong>Total:</strong></td>
													<td style="text-align: left;"></td>
													<td style="text-align: right;">$ ${montoFinal.toFixed(2)}</td>
												</tr>
										</tbody>
									</table>
								</div>`,
						title: 'Orden de compra',
						showConfirmButton: true,
						ConfirmButtonText: 'cerrar',
						allowOutsideClick: false,
					});
					setOrden({});
					cleanAllCart();
				})
				.catch((error) => {
					console.error('Error al guardar el documento:', error);
				});
		}
	}, [Orden]);

	useEffect(() => {
		if (cartItems.length > 0) {
			setLoading(false);
			setViewEmpty(false);
			setMontoFinal(cartItems.reduce((acumulador, producto) => acumulador + producto.cantidad * producto.precio, 0));
		} else {
			setLoading(false);
			setViewEmpty(true);
		}
	}, [cartItems]);
	return (
		<div className={styles.center}>
			{Loading ? (
				<Skeleton animation="wave" variant="rectangular" width={410} height={300} />
			) : (
				<>
					{ViewEmpty ? (
						<div className={styles.cartEmpty}>
							<ProductionQuantityLimitsIcon sx={{ fontSize: 90 }} />
							<h2> Carrito Vacio</h2>
						</div>
					) : (
						<div className={styles.margin}>
							{cartItems.map((product, i) => {
								return (
									<div key={i}>
										<CardShop items={product} />
										<Divider light />
									</div>
								);
							})}
							<div>
								<h2 className={styles.montoFinal}> Monto total: ${montoFinal.toFixed(2)}</h2>
								<Button onClick={handleClickOpen} className={styles.buttonCompra} variant="contained">
									Comprar
								</Button>
								<CardUserData open={open} handleSave={handleSave} handleClose={handleClose} handleClickOpen={handleClickOpen} />
							</div>
							<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={openLoader} onClick={handleClose}>
								<CircularProgress color="inherit" />
							</Backdrop>
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default Checkout;
