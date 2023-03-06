import React from 'react';
import styles from './navbar.module.css';
import logo from '../../assets/img/logoNav.png';
import { Button, Menu, MenuItem } from '@mui/material';
import CartWidget from '../CartWidget';
const NavBar = () => {
	const [Category, setCategory] = React.useState(null);
	const open = Boolean(Category);
	const handleClick = (event) => {
		setCategory(event.currentTarget);
	};
	const handleClose = () => {
		setCategory(null);
	};
	return (
		<nav className={styles.navComponent}>
			<Button className={styles.divLogo}>
				<img className={styles.logo} src={logo} />
			</Button>

			<Button className={styles.navButto}>HOME</Button>
			<Button className={styles.navButto}>TIENDA</Button>
			<Button id="basic-button" onClick={handleClick} className={styles.navButto}>
				CATEGORIA
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={Category}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={handleClose}>ALIMENTO</MenuItem>
				<MenuItem onClick={handleClose}>ROPA</MenuItem>
				<MenuItem onClick={handleClose}>JUGUETES</MenuItem>
				<MenuItem onClick={handleClose}>OTROS</MenuItem>
			</Menu>
			<Button className={styles.navButto}>CONTACTO</Button>
			<CartWidget className={styles.navButto} />
		</nav>
	);
};

export default NavBar;
