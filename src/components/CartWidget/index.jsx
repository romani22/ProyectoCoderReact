import React from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import styles from "./cartWidget.module.css";
const CartWidget = () => {
	return (
		<IconButton aria-label='cart' className={styles.containerCart}>
			<Badge badgeContent={1} color='primary'>
				<ShoppingCartIcon />
			</Badge>
		</IconButton>
	);
};

export default CartWidget;
