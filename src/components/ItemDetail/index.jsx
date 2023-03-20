import { Card, CardActionArea, CardContent, CardMedia, Skeleton, Typography } from '@mui/material';
import styles from './itemDetail.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ items }) => {
	const [Productos, setProductos] = useState([]);
	const [Loading, setLoading] = useState(true);
	const { id, category } = useParams();
	useEffect(() => {
		let item;
		if (items.length != 0) {
			if (category != undefined) {
				item = items[category].filter((producto) => producto.id == id);
				console.log(item);
				setProductos(item[0]);
				setLoading(false);
			}
		}
	});
	return (
		<div className={styles.itemCenter}>
			{Loading ? (
				<Skeleton animation="wave" variant="rectangular" width={410} height={300} />
			) : (
				<Card key={Productos.id} sx={{ maxWidth: 345 }}>
					<CardActionArea>
						<CardMedia component="img" image={Productos.img_link} alt="Perros" />
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{Productos.nombre}
							</Typography>
							<Typography gutterBottom variant="h5" component="div">
								$ {Productos.precio}
							</Typography>
							<Typography gutterBottom variant="p" component="div">
								Descripción: {Productos.descripcion} Edad de uso: {Productos.edad_recomendada}
							</Typography>
							<Typography gutterBottom variant="p" component="div">
								Edad de uso: {Productos.edad_recomendada}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			)}
		</div>
	);
};
export default ItemDetail;
