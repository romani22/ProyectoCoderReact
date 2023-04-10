import { Button, Card, CardContent, CardMedia, Skeleton, Typography } from '@mui/material';
import styles from './ItemDetailContainer.module.css';
import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CartShopContext } from '../../contexts/CartShop';
import { ItemsContext } from '../../contexts/ItemsContext';
import ItemQuantitySelector from '../ItemQuantitySelector';
import Swal from 'sweetalert2';
import ButtonBack from '../ButtonBack';
import ItemDescription from '../ItemDescription';
const ItemDetailContainer = () => {
	const [returnUrl, setReturnUrl] = useState([]);
	const [Loading, setLoading] = useState(true);
	const { url, id } = useParams();
	const { addToCart } = useContext(CartShopContext);
	const { Item, getItemsForID } = useContext(ItemsContext);

	const handleAddToCart = () => {
		addToCart(Item, quantity);
		Swal.fire({
			icon: 'success',
			title: 'Perfecto!',
			text: 'Se cargo correctamente',
			showConfirmButton: false,
		});
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
			<ButtonBack returnUrl={returnUrl} />
			<div className={styles.itemCard}>
				{Loading ? (
					<Skeleton animation="wave" variant="rectangular" width={410} height={300} />
				) : (
					<Card key={Item.id} className={styles.Card}>
						<div className={styles.divImg}>
							<CardMedia component="img" image={Item.img_link} alt="Perros" className={styles.img} />
						</div>
						<CardContent className={styles.textDescription}>
							<ItemDescription Item={Item} />
							<ItemQuantitySelector funcion={handleQuantityChange} cant={quantity} />
							<Button onClick={handleAddToCart} variant="contained">
								<AddShoppingCartIcon />
							</Button>
						</CardContent>
					</Card>
				)}
			</div>
		</div>
	);
};
export default ItemDetailContainer;
