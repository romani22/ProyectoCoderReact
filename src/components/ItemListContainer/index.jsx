import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import perros from '../../assets/img/perros.jpg';
import React from 'react';

const ItemListContainer = (prop) => {
	return (
		<div className="container">
			<div className="itemCenter">
				<Card sx={{ maxWidth: 345 }}>
					<CardActionArea>
						<CardMedia component="img" image={perros} alt="Perros" />
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{prop.greeting}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</div>
		</div>
	);
};

export default ItemListContainer;
