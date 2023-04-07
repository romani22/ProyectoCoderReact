import { useContext, useEffect, useState } from 'react';
import styles from './CardShop.module.css';
import { Button, Skeleton } from '@mui/material';
import { CartShopContext } from '../../contexts/CartShop';
import ItemQuantitySelector from '../ItemQuantitySelector';
import DeleteIcon from '@mui/icons-material/Delete';
const CardShop = ({ items }) => {
	const [Productos, setProductos] = useState([]);
	const [Loading, setLoading] = useState(true);
	const { addToCart, removeFromCart } = useContext(CartShopContext);
	const handleQuantityChange = async (count) => {
		addToCart(Productos, count);
	};
	const handleClearCart = () => {
		removeFromCart(Productos.id);
	};
	useEffect(() => {
		setProductos(items);
		setLoading(false);
	}, [items]);

	return (
		<div className={styles.itemCenter}>
			{Loading ? (
				<Skeleton animation="wave" variant="rectangular" width={410} height={300} />
			) : (
				<div className={styles.productCard}>
					<div className={styles.productImage}>
						<img className={styles.imageSize} src={Productos.img_link} alt={Productos.nombre} />
					</div>
					<div className="product-description">
						<h3>{Productos.nombre}</h3>
						{Object.keys(Productos).map((e, i) => {
							if (e == 'descripcion') {
								return <p key={i}>{`${Productos[e]}`}</p>;
							}
						})}
					</div>
					<div className="product-quantity">
						<ItemQuantitySelector key={Productos.id} funcion={handleQuantityChange} cant={Productos.cantidad} />
					</div>
					<div className="product-price">
						<h2> ${(Productos.cantidad * Productos.precio).toFixed(2)}</h2>
					</div>
					<Button onClick={handleClearCart}>
						<DeleteIcon sx={{ color: 'red' }} />
					</Button>
				</div>
			)}
		</div>
	);
};

export default CardShop;
