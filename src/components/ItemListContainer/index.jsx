import { Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardItem from '../CardItem';
import styles from './ItemListContainer.module.css';

const ItemListContainer = ({ productos }) => {
	const [Products, setProducts] = useState([]);
	const [Loading, setLoading] = useState(true);
	const { category } = useParams();
	let url = '';
	if (category == 'dogs') {
		url = 'https://api.api-ninjas.com/v1/dogs?trainability=5';
	} else {
		url = 'https://api.api-ninjas.com/v1/cats?grooming=5';
	}
	const getProdructos = async () => {
		const result = await fetch(`${url}`, {
			headers: { 'X-Api-Key': 'IlgUCArWly+/1FjOBaoMww==0U1GuSxGn6o4Wj4m' },
			contentType: 'application/json',
		});
		const data = await result.json();
		setProducts(data);
		setLoading(false);
	};
	useEffect(() => {
		getProdructos();
	}, []);
	return (
		<div id="item" className={styles.centradoItems}>
			{Loading ? (
				<Skeleton animation="wave" variant="rectangular" width={410} height={300} />
			) : (
				Products.map((producto) => {
					return <CardItem greeting="Mensaje " item={producto} />;
				})
			)}
		</div>
	);
};

export default ItemListContainer;
