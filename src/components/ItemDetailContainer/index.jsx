import { Button, Card, CardActionArea, CardContent, CardMedia, IconButton, Skeleton, Typography } from '@mui/material';
import styles from './ItemDetailContainer.module.css';
import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CartShopContext } from '../../contexts/CartShop';
import { ItemsContext } from '../../contexts/ItemsContext';
import ItemQuantitySelector from '../ItemQuantitySelector';
const ItemDetailContainer = () => {
	const [returnUrl, setReturnUrl] = useState([]);
	const [Loading, setLoading] = useState(true);
	const { url, id } = useParams();
	const { addToCart, cartItems } = useContext(CartShopContext);
	const { Item, getItemsForID } = useContext(ItemsContext);

	const handleAddToCart = () => {
		addToCart(Item, quantity);
	};

	const [quantity, setQuantity] = useState(1);

	const handleQuantityChange = (count) => {
		setQuantity(count);
	};

	useEffect(() => {
		getItemsForID(id);
	}, []);

	useEffect(() => {
		if (url != 'Home') {
			setReturnUrl(`/productos/${url}`);
		} else {
			setReturnUrl(`/home`);
		}
		if (Object.keys(Item).length > 0 && Item.id == id) {
			setLoading(false);
		}
	}, [url, returnUrl, Item, quantity]);
	return (
		<div key={Item.id}>
			<Link to={returnUrl} className={styles.buttonReverse}>
				<Button variant="contained">
					<KeyboardReturnIcon></KeyboardReturnIcon>
					Volver
				</Button>
			</Link>

			<div className={styles.itemCard}>
				{Loading ? (
					<Skeleton animation="wave" variant="rectangular" width={410} height={300} />
				) : (
					<>
						<Card key={Item.id} className={styles.Card}>
							<div className={styles.divImg}>
								<CardMedia component="img" image={Item.img_link} alt="Perros" className={styles.img} />
							</div>
							<CardContent className={styles.textDescription}>
								<Typography gutterBottom variant="h5" component="div">
									{Item.nombre}
								</Typography>
								<Typography gutterBottom variant="h5" component="div">
									$ {Item.precio}
								</Typography>
								{Object.keys(Item).map((e, i) => {
									if (e != 'id' && e != 'precio' && e != 'nombre' && e != 'img_link' && e != 'raza' && e != 'cantidad') {
										return (
											<Typography key={i} gutterBottom variant="subtitle1" component="div">
												{`${e.charAt(0).toUpperCase() + e.slice(1).replace(/_/g, ' ')}: ${Item[e]}`}
											</Typography>
										);
									}
								})}
							</CardContent>

							<ItemQuantitySelector funcion={handleQuantityChange} cant={quantity} />
							<Button onClick={handleAddToCart} variant="contained">
								<AddShoppingCartIcon />
							</Button>
						</Card>
					</>
				)}
			</div>
		</div>
	);
};
export default ItemDetailContainer;
