import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './ButtonCategory.module.css';
const ButtonCategory = ({ url, img, text, identify }) => {
	return (
		<Link key={identify} to={url} className={styles.itemCenter}>
			<Card id={identify} sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<div
						className={styles.DivImg}
						style={{
							backgroundImage: `url(${img})`,
						}}
					>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div" className={styles.cardTitle}>
								{text}
							</Typography>
						</CardContent>
					</div>
				</CardActionArea>
			</Card>
		</Link>
	);
};

export default ButtonCategory;
