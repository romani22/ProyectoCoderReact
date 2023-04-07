import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

const CardUserData = ({ open, handleSave, handleClose }) => {
	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [email, setEmail] = useState('');
	const [confirm, setConfirm] = useState('');
	const [localidad, setLocalidad] = useState('');
	const [validateEmail, setValidateEmail] = useState(false);
	const [UserData, setUsetData] = useState([]);

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handleNombreChange = (event) => {
		setNombre(event.target.value);
	};
	const handleApellidoChange = (event) => {
		setApellido(event.target.value);
	};
	const handleConfirmChange = (event) => {
		setConfirm(event.target.value);
	};

	const handlelocalidadChange = (event) => {
		setLocalidad(event.target.value);
	};
	const handleClear = () => {
		setNombre('');
		setApellido('');
		setEmail('');
		setConfirm('');
		handleClose();
	};
	const handleSaveUser = () => {
		handleClear();
		handleSave(UserData);
	};
	useEffect(() => {
		if (confirm == email) {
			setValidateEmail(false);
		} else {
			setValidateEmail(true);
		}
	}, [confirm]);

	useEffect(() => {
		setUsetData({ nombre, apellido, email, localidad });
	}, [nombre, apellido, email, localidad]);

	return (
		<Dialog open={open} onClose={handleClear}>
			<DialogTitle>Comprar</DialogTitle>
			<DialogContent>
				<DialogContentText>Si esta de acuerdo con su compra ingrese los siguientes datos.</DialogContentText>
				<TextField autoFocus margin="dense" id="nombre" label="Nombre" type="text" fullWidth variant="standard" value={nombre} onChange={handleNombreChange} />
				<TextField autoFocus margin="dense" id="Apellido" label="Apellido" type="text" fullWidth variant="standard" value={apellido} onChange={handleApellidoChange} />
				<TextField autoFocus margin="dense" id="Localidad" label="Localidad" type="text" fullWidth variant="standard" value={localidad} onChange={handlelocalidadChange} />
				<TextField autoFocus margin="dense" id="email" label="Email" type="email" fullWidth variant="standard" value={email} onChange={handleEmailChange} />
				<TextField autoFocus margin="dense" error={validateEmail} id="confirm" label="Confirmar Email" type="email" fullWidth variant="standard" value={confirm} onChange={handleConfirmChange} />
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClear}>Cancelar</Button>
				<Button onClick={handleSaveUser}>Comprar</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CardUserData;
