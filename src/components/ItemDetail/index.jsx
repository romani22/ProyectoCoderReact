import { Button, Card, CardActionArea, CardContent, CardMedia, Skeleton, Typography } from '@mui/material';
import styles from './itemDetail.module.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
const ItemDetail = ({ items }) => {
	const [Productos, setProductos] = useState([]);
	const [returnUrl, setReturnUrl] = useState([]);
	const [Loading, setLoading] = useState(true);
	const { Url, id, category } = useParams();
	useEffect(() => {
		if (items.length != 0) {
			if (category != undefined) {
				if (Url == 'Item') {
					setReturnUrl(`/productos/${category}`);
				} else {
					setReturnUrl(`/home`);
				}
				let item = items[category].filter((producto) => producto.id == id);
				setProductos(item[0]);
				setLoading(false);
			}
		}
	}, [items, returnUrl]);
	return (
		<div className={styles.itemCenter}>
			<Link to={returnUrl} className={styles.buttonReverse}>
				<Button variant="contained">
					<KeyboardReturnIcon></KeyboardReturnIcon>
					Volver
				</Button>
			</Link>

			<div className={styles.itemCard}>
				{Loading ? (
					<Skeleton animation="wave" variant="rectangular" width={410} height={300} />
				) : (
					<Card sx={{ maxWidth: 5000 }}>
						<CardActionArea>
							<div className={styles.divImg}>
								<CardMedia component="img" image={Productos.img_link} alt="Perros" className={styles.img} />
							</div>

							<CardContent className={styles.textCenter}>
								<Typography gutterBottom variant="h5" component="div">
									{Productos.nombre}
								</Typography>
								<Typography gutterBottom variant="h5" component="div">
									$ {Productos.precio}
								</Typography>
								{Object.keys(Productos).map((e, i) => {
									if (e != 'id' && e != 'precio' && e != 'nombre' && e != 'img_link' && e != 'raza') {
										return (
											<Typography gutterBottom variant="p" component="div">
												{`${e}: ${Productos[e]}`}
											</Typography>
										);
									}
								})}
							</CardContent>
						</CardActionArea>
					</Card>
				)}
			</div>
		</div>
	);
};
export default ItemDetail;
