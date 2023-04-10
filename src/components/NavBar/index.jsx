import styles from './navbar.module.css';
import logo from '../../assets/img/logoNav.png';
import { Button, Menu, MenuItem } from '@mui/material';
import CartWidget from '../CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
const NavBar = () => {
	const [Category, setCategory] = useState(null);
	const open = Boolean(Category);
	const handleClick = (event) => {
		setCategory(event.currentTarget);
	};
	const handleClose = () => {
		setCategory(null);
	};
	return (
		<nav className={styles.navComponent}>
			<NavLink to="/" className={styles.navButto}>
				<Button className={styles.divLogo}>
					<img className={styles.logo} src={logo} />
				</Button>
			</NavLink>
			<NavLink to="/" className={styles.navButto}>
				<Button className={styles.navButto}>HOME</Button>
			</NavLink>
			<Button id="basic-button" onClick={handleClick} className={styles.navButto}>
				CATEGORIA
			</Button>
			<Menu
				id="basic-menu"
				disableScrollLock={true}
				anchorEl={Category}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<Link to="/productos/Alimento" className={styles.categoryButto}>
					<MenuItem onClick={handleClose}>ALIMENTO</MenuItem>
				</Link>
				<Link to="/productos/Ropa" className={styles.categoryButto}>
					<MenuItem onClick={handleClose}>ROPA</MenuItem>
				</Link>
				<Link to="/productos/Juguetes" className={styles.categoryButto}>
					<MenuItem onClick={handleClose}>JUGUETES</MenuItem>
				</Link>
				<Link to="/productos/Otros" className={styles.categoryButto}>
					<MenuItem onClick={handleClose}>OTROS</MenuItem>
				</Link>
			</Menu>

			<CartWidget className={styles.navButto} />
		</nav>
	);
};

export default NavBar;
