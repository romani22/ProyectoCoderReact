import { Button, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CardItem from '../CardItem';
import styles from './ItemListContainer.module.css';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
const ItemListContainer = ({ productos, key }) => {
	const [Options, setOptions] = useState([]);
	const [BtnVolver, setBtnVolver] = useState(false);
	const { category } = useParams();
	const cards = [];
	let titulo = '';
	useEffect(() => {
		if (productos.length != 0) {
			if (category != undefined) {
				productos[category].map((producto, i) => {
					cards.push([producto, category]);
				});
				titulo = category;
				setBtnVolver(true);
				setOptions(cards);
			} else {
				let categorias = Object.keys(productos);
				categorias.forEach((element, f) => {
					if (f == 1) {
						titulo = element;
					}
					productos[element].map((producto, i) => {
						if (i < 6) {
							cards.push([producto, element]);
						}
					});
				});
				setOptions(cards);
				setBtnVolver(false);
			}
		}
	}, [category, productos]);
	return (
		<div id={key}>
			{Options.map((producto, i) => {
				if (titulo != producto[1]) {
					titulo = producto[1];
					return (
						<>
							<div id="item" className={styles.centerTitle}>
								{BtnVolver ? (
									<Link to="/home" className={styles.buttonReverse}>
										<Button variant="contained">
											<KeyboardReturnIcon></KeyboardReturnIcon>
											Volver
										</Button>
									</Link>
								) : (
									<></>
								)}
								<h1 className={styles.textCenter}>{titulo}</h1>
							</div>
							<div id="item" className={styles.centradoItems}>
								{Options.map((producto, i) => {
									if (producto[1] == titulo) return <CardItem id={i} grupo={producto[1]} item={producto[0]} />;
								})}
							</div>
						</>
					);
				}
			})}
		</div>
	);
};

export default ItemListContainer;
