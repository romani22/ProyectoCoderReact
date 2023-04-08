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
		<Link to={`/cart`} className={styles.itemCenter}>
			<IconButton aria-label="cart" className={styles.containerCart}>
				<Badge badgeContent={getCartCount()} color="primary">
					<ShoppingCartIcon />
				</Badge>
			</IconButton>
		</Link>
	);
};

export default CartWidget;
