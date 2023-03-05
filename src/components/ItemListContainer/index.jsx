import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import perros from "../../assets/img/perros.jpg";
import React from "react";

const ItemListContainer = (prop) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia component='img' image={perros} alt='green iguana' />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{prop.greeting}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default ItemListContainer;
