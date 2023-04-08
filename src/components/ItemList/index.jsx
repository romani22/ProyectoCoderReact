import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './ItemList.module.css';
const ItemList = ({ item, grupo }) => {
	const { category } = useParams();
	const [Url, setUrl] = useState();
	useEffect(() => {
		if (category == undefined) {
			setUrl(`/Home/${item.id}`);
		} else {
			setUrl(`/${category}/${item.id}`);
		}
	}, [category, item, grupo]);
	return (
		<div className={styles.divCards}>
			<Card sx={{ maxWidth: 345 }} className={styles.itemCenter}>
				<Link to={`${Url}`} className={styles.itemCenter}>
					<CardActionArea className={styles.divCards}>
						<img src={item.img_link} alt={item.nombre} className={styles.imgSize} />
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

export default ItemList;
