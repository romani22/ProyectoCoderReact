import { Typography } from '@mui/material';
import styles from './ItemDescription.module.css';
const ItemDescription = ({ Item }) => {
	return (
		<>
			<Typography gutterBottom variant="h4">
				{Item.nombre}
			</Typography>
			<Typography gutterBottom variant="h4">
				$ {Item.precio}
			</Typography>
			{Object.keys(Item).map((e, i) => {
				if (e != 'id' && e != 'precio' && e != 'nombre' && e != 'img_link' && e != 'raza' && e != 'cantidad') {
					return (
						<p key={i} className={styles.textDetail}>
							<strong>{`${e.charAt(0).toUpperCase() + e.slice(1).replace(/_/g, ' ')}:`}</strong>
							{`${Item[e]}`}
						</p>
					);
				}
			})}
		</>
	);
};

export default ItemDescription;
