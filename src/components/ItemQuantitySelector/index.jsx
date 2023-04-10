import { Button, ButtonGroup, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styles from './ItemQuantitySelector.module.css';
const ItemQuantitySelector = ({ funcion, cant }) => {
	return (
		<ButtonGroup className={styles.BotonGroupStyle}>
			<Button
				variant="contained"
				aria-label="reduce"
				onClick={() => {
					if (cant > 1) {
						funcion(Math.max(cant - 1, 0));
					}
				}}
			>
				<RemoveIcon fontSize="small" />
			</Button>
			<Typography className={styles.magenesText} variant="h5" component="p">
				{cant}
			</Typography>
			<Button
				variant="contained"
				aria-label="increase"
				onClick={() => {
					funcion(cant + 1);
				}}
			>
				<AddIcon fontSize="small" />
			</Button>
		</ButtonGroup>
	);
};

export default ItemQuantitySelector;
