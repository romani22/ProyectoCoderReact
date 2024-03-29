import { useContext, useState } from 'react';
import { CartShopContext } from '../../contexts/CartShop';
import CardShop from '../CardShop';
import { useEffect } from 'react';
import styles from './Checkout.module.css';
import { Backdrop, Button, CircularProgress, Divider, Skeleton } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../../db/firebase-config';
import '../../../node_modules/sweetalert2/dist/sweetalert2.css';
import CardUserData from '../CardUserData';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import TicketPurchase from '../TicketPurchase';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
	const { cartItems, cleanAllCart } = useContext(CartShopContext);
	const [montoFinal, setMontoFinal] = useState(0);
	const [Loading, setLoading] = useState(true);
	const [ViewEmpty, setViewEmpty] = useState(true);
	const [open, setOpen] = useState(false);
	const [openLoader, setOpenLoader] = useState(false);
	const [Orden, setOrden] = useState({});
	const orderCollectionRef = collection(db, 'orders');
	const NavigateHome = useNavigate();

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
			MontoFinal: montoFinal,
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
					TicketPurchase({ Orden, montoFinal });
					setOrden({});
					cleanAllCart();
					NavigateHome('/home');
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
