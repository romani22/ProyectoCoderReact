import { useContext, useState } from 'react';
import { CartShopContext } from '../../contexts/CartShop';
import CardShop from '../CardShop';
import { useEffect } from 'react';
import styles from './Checkout.module.css';
import { Button, Divider, Skeleton } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../../db/firebase-config';
import Swal from 'sweetalert2';
import '../../../node_modules/sweetalert2/dist/sweetalert2.css';
import CardUserData from '../CardUserData';
const Checkout = () => {
	const { cartItems } = useContext(CartShopContext);
	const [montoFinal, setMontoFinal] = useState(0);
	const [Loading, setLoading] = useState(true);
	const [ViewEmpty, setViewEmpty] = useState(true);
	const [open, setOpen] = useState(false);
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
		// addDoc(orderCollectionRef, Order);
	};
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
						<div className={styles.margin}>
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
								<h2 className={styles.montoFinal}> Monto total:{montoFinal.toFixed(2)}</h2>
								<Button onClick={handleClickOpen} variant="contained">
									Comprar
								</Button>
								<CardUserData open={open} handleSave={handleSave} handleClose={handleClose} />
							</div>
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default Checkout;
