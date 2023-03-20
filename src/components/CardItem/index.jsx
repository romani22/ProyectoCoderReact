import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './CardItem.module.css';
const CardItem = ({ item, grupo }) => {
	const { category } = useParams();
	const [Url, setUrl] = useState();
	useEffect(() => {
		if (category == undefined) {
			console.log(grupo);
			setUrl(`/productos/${grupo}/${item.id}`);
		} else {
			setUrl(`/productos/${category}/${item.id}`);
		}
	}, []);

	return (
		<div className={styles.divCards}>
			<Card key={item.id} sx={{ maxWidth: 345 }} className={styles.itemCenter}>
				<Link key={item.id} to={`${Url}`} className={styles.itemCenter}>
					<CardActionArea>
						<CardMedia component="img" image={item.img_link} alt="Perros" />
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{item.nombre}
							</Typography>
							<Typography gutterBottom variant="h5" component="div">
								$ {item.precio}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Link>
			</Card>
		</div>
	);
};

export default CardItem;
