import { Card, CardActionArea, CardContent, CardMedia, Skeleton, Typography } from '@mui/material';
import styles from './itemDetail.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
	const [Product, setProduct] = useState({});
	const [Loading, setLoading] = useState(true);
	const { name, category } = useParams();
	let url = '';
	if (category == 'dogs') {
		url = `https://api.api-ninjas.com/v1/dogs?name=${name}`;
	} else {
		url = `https://api.api-ninjas.com/v1/cats?name=${name}`;
	}
	console.log(category);
	useEffect(() => {
		fetch(`${url}`, {
			headers: { 'X-Api-Key': 'IlgUCArWly+/1FjOBaoMww==0U1GuSxGn6o4Wj4m' },
			contentType: 'application/json',
		})
			.then((res) => res.json())
			.then((data) => {
				setProduct(data[0]);
				setLoading(false);
			});
	}, []);
	return (
		<div className={styles.itemCenter}>
			{Loading ? (
				<Skeleton animation="wave" variant="rectangular" width={410} height={300} />
			) : (
				<Card key={Product.id} sx={{ maxWidth: 345 }}>
					<CardActionArea>
						<CardMedia component="img" image={Product.image_link} alt="Perros" />
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{Product.name}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			)}
		</div>
	);
};

export default ItemDetail;
