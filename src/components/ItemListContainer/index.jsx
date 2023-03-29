import { Button, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CardItem from '../CardItem';
import styles from './ItemListContainer.module.css';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import db from '../../../db/firebase-config';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';
const ItemListContainer = ({ productos, key }) => {
	const [Options, setOptions] = useState([]);
	const [BtnVolver, setBtnVolver] = useState(false);
	const { category } = useParams();
	const itemsRef = collection(db, 'Ropa');
	useEffect(() => {
		if (productos.length != 0) {
			if (category != undefined) {
				setOptions(
					Object.keys(productos)
						.filter((propiedad) => propiedad === category)
						.reduce((obj, key) => {
							obj[key] = productos[key];
							return obj;
						}, {})
				);
				setBtnVolver(true);
			} else {
				setOptions(productos);
				setBtnVolver(false);
			}
		}
	}, [category, productos]);
	const getItems = async () => {
		const itemsCollection = await getDocs(itemsRef);
		const items = itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
		console.log(items);
	};
	useEffect(() => {
		getItems();
	});

	const addItem = async (e) => {
		e.preventDefault();
		await addDoc(itemsRef, {
			//data ejem: prop: value,
		});
		getItems();
	};
	return (
		<div id={key}>
			{Object.keys(Options).map((category) => {
				return (
					<>
						<div id="item" className={styles.centerTitle}>
							{BtnVolver && (
								<Link to="/home" className={styles.buttonReverse}>
									<Button variant="contained">
										<KeyboardReturnIcon></KeyboardReturnIcon>
										Volver
									</Button>
								</Link>
							)}
							<h1 className={styles.textCenter}>{category}</h1>
						</div>
						<div id="item" className={styles.centradoItems}>
							{Options[category].map((producto, i) => {
								return <CardItem id={i} grupo={category} item={producto} />;
							})}
						</div>
					</>
				);
				// }
			})}
		</div>
	);
};

export default ItemListContainer;
