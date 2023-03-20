import { Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardItem from '../CardItem';
import styles from './ItemListContainer.module.css';

const ItemListContainer = ({ productos }) => {
	const [Options, setOptions] = useState([]);
	const { category } = useParams();
	let cards = [];
	useEffect(() => {
		if (productos.length != 0) {
			if (category != undefined) {
				productos[category].map((producto, i) => {
					cards.push([producto, category]);
				});
				setOptions(cards);
			} else {
				let categorias = Object.keys(productos);
				categorias.forEach((element) => {
					productos[element].map((producto, i) => {
						if (i < 6) {
							cards.push([producto, element]);
						}
					});
				});
				setOptions(cards);
			}
		}
	}, [category]);

	return (
		<div>
			<div id="item" className={styles.centradoItems}>
				{Options.map((producto, i) => {
					return <CardItem id={i} grupo={producto[1]} item={producto[0]} />;
				})}
			</div>
		</div>
	);
};

export default ItemListContainer;
