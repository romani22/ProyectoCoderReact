import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './CardItem.module.css';
const CardItem = ({ item }) => {
	return (
		<div className={styles.divCards}>
			<Card key={item.id} sx={{ maxWidth: 345 }} className={styles.itemCenter}>
				<Link to={`${item.name}`} className={styles.itemCenter}>
					<CardActionArea>
						<CardMedia component="img" image={item.image_link} alt="Perros" />
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{item.name}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Link>
			</Card>
		</div>
	);
};

export default CardItem;
