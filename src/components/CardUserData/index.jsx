import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
const CardUserData = ({ open, handleSave, handleClose, handleClickOpen }) => {
	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [email, setEmail] = useState('');
	const [confirm, setConfirm] = useState('');
	const [telefono, setTelefono] = useState('');
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

	const handleTelefonoChange = (event) => {
		setTelefono(event.target.value);
	};
	const handleClear = () => {
		setNombre('');
		setApellido('');
		setEmail('');
		setConfirm('');
		setTelefono('');
		handleClose();
	};
	const handleSaveUser = () => {
		if (nombre != '' && apellido != '' && email != '' && telefono != '') {
			if (!validateEmail) {
				handleClear();
				handleSave(UserData);
			} else {
				handleClose();
				Swal.fire({ title: 'La confirmacion de contraseña no es la correcta', confirmButtonText: 'OK' }).then((result) => {
					if (result.isConfirmed) {
						handleClickOpen();
					}
				});
			}
		} else {
			handleClose();
			Swal.fire({ title: 'Debe completar todo el formulario', confirmButtonText: 'OK' }).then((result) => {
				if (result.isConfirmed) {
					handleClickOpen();
				}
			});
		}
	};
	useEffect(() => {
		if (confirm == email) {
			setValidateEmail(false);
		} else {
			setValidateEmail(true);
		}
	}, [confirm]);

	useEffect(() => {
		setUsetData({ nombre, apellido, email, telefono });
	}, [nombre, apellido, email, telefono]);

	return (
		<Dialog open={open} onClose={handleClear}>
			<DialogTitle>Comprar</DialogTitle>
			<DialogContent>
				<DialogContentText>Si esta de acuerdo con su compra ingrese los siguientes datos.</DialogContentText>
				<TextField autoFocus margin="dense" id="nombre" label="Nombre" type="text" fullWidth variant="standard" value={nombre} onChange={handleNombreChange} />
				<TextField autoFocus margin="dense" id="Apellido" label="Apellido" type="text" fullWidth variant="standard" value={apellido} onChange={handleApellidoChange} />
				<TextField autoFocus margin="dense" id="telefono" label="telefono" type="number" fullWidth variant="standard" value={telefono} onChange={handleTelefonoChange} />
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
