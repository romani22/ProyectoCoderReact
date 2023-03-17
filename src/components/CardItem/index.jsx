import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const CardItem = ({ raza, imagen, identificacion }) => {
	return (
		<div id={identificacion} className="itemCenter">
			<Card sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<CardMedia component="img" image={imagen} alt="Perros" />
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{raza}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
};

export default CardItem;
