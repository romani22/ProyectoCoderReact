import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './ViewHome.module.css';
const ViewHome = () => {
	return (
		<div className={styles.divCards}>
			<Link to="/productos/dogs" className={styles.itemCenter}>
				<Card id="cardDog" sx={{ maxWidth: 345 }}>
					<CardActionArea>
						<CardMedia
							sx={{ minHeight: 200, minWidth: 250 }}
							component="img"
							image="https://api-ninjas.com/images/dogs/golden_retriever.jpg"
							alt="Perros"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								PERROS
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Link>
			<Link to="/productos/cats" className={styles.itemCenter}>
				<Card id="cardCat" sx={{ maxWidth: 345 }}>
					<CardActionArea>
						<CardMedia
							sx={{ minHeight: 200, minWidth: 250 }}
							component="img"
							image="https://api-ninjas.com/images/cats/abyssinian.jpg"
							alt="Gatos"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								GATOS
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Link>
		</div>
	);
};

export default ViewHome;
