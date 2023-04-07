import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import styles from './cartWidget.module.css';
import { CartShopContext } from '../../contexts/CartShop';
import { Link } from 'react-router-dom';
const CartWidget = () => {
	const { getCartCount } = useContext(CartShopContext);
	return (
		<IconButton aria-label="cart" className={styles.containerCart}>
			<Link to={`/cart`} className={styles.itemCenter}>
				<Badge badgeContent={getCartCount()} color="primary">
					<ShoppingCartIcon />
				</Badge>
			</Link>
		</IconButton>
	);
};

export default CartWidget;
