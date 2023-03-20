import { Card, CardActionArea, CardContent, CardMedia, Skeleton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemListContainer from '../ItemListContainer';
import styles from './ViewHome.module.css';
const ViewHome = () => {
	const [Productos, setProductos] = useState([]);
	const [Loading, setLoading] = useState(true);
	useEffect(() => {
		fetch('../../public/MaterialsPetShop.json')
			.then((res) => res.json())
			.then((data) => {
				setProductos(data);
				setLoading(false);
			});
	}, []);
	return (
		<div>
			<div className={styles.divCards}>
				<Link key="1" to="/productos/alimento" className={styles.itemCenter}>
					<Card id="cardDog" sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								sx={{ minHeight: 100, minWidth: 150, maxHeight: 200, maxWidth: 250 }}
								component="img"
								image="../src/assets/img/comida.jpg"
								alt="Alimento"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									ALIMENTOS
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Link>
				<Link key="2" to="/productos/Ropa" className={styles.itemCenter}>
					<Card id="cardCat" sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								sx={{ minHeight: 100, minWidth: 150, maxHeight: 200, maxWidth: 250 }}
								component="img"
								image="../src/assets/img/ropa.jpg"
								alt="Ropa"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									ROPA
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Link>
				<Link key="3" to="/productos/juguetes" className={styles.itemCenter}>
					<Card id="cardDog" sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								sx={{ minHeight: 100, minWidth: 150, maxHeight: 200, maxWidth: 250 }}
								component="img"
								image="../src/assets/img/juguetes.jpg"
								alt="Juguetes"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									JUGUETES
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Link>
				<Link key="4" to="/productos/otros" className={styles.itemCenter}>
					<Card id="cardCat" sx={{ maxWidth: 345 }}>
						<CardActionArea>
							<CardMedia
								sx={{ minHeight: 100, minWidth: 150, maxHeight: 200, maxWidth: 250 }}
								component="img"
								image="../src/assets/img/otros.jpg"
								alt="Otros"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									OTROS
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Link>
			</div>
			<div className={styles.divCards}>
				{Loading ? (
					<Skeleton animation="wave" variant="rectangular" width={410} height={300} />
				) : (
					<ItemListContainer productos={Productos} />
				)}
			</div>
		</div>
	);
};

export default ViewHome;
