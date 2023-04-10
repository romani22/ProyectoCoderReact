import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import styles from './ButtonBack.module.css';
const ButtonBack = ({ returnUrl }) => {
	return (
		<Link to={returnUrl} className={styles.buttonReverse}>
			<Button variant="contained">
				<KeyboardReturnIcon></KeyboardReturnIcon>
				Volver
			</Button>
		</Link>
	);
};

export default ButtonBack;
