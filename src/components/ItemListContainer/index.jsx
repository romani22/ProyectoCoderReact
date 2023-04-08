import { Button, Grid, Skeleton } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './ItemListContainer.module.css';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { ItemsContext } from '../../contexts/ItemsContext';
import ItemList from '../ItemList';
const ItemListContainer = () => {
	const [Options, setOptions] = useState([]);
	const [Categorys, setCategorys] = useState([]);
	const [BtnVolver, setBtnVolver] = useState(false);
	const [Loading, setLoading] = useState(true);
	const { category } = useParams();
	const { Productos, getItems } = useContext(ItemsContext);
	const getCategorys = () => {
		const categorysObj = [];
		Productos.forEach((obj) => {
			if (!categorysObj.includes(obj.category)) {
				categorysObj.push(obj.category);
			}
		});
		setCategorys(categorysObj);
	};
	useEffect(() => {
		getItems();
	}, []);

	useEffect(() => {
		if (category != undefined) {
			setOptions(Productos.filter((propiedad) => propiedad.category === category));
			setCategorys([category]);
			setBtnVolver(true);
		} else {
			getCategorys();
			setOptions(Productos);
			setBtnVolver(false);
		}
		if (Productos.length != 0) {
			setLoading(false);
		}
	}, [category, Productos]);
	return (
		<div className={styles.centradoView}>
			{Loading ? (
				<Skeleton animation="wave" variant="rectangular" width={410} height={300} />
			) : (
				Categorys.map((Categoria, i) => {
					return (
						<div key={i} className={styles.sizeCard}>
							{BtnVolver && (
								<Link to="/home" className={styles.linkReverse}>
									<Button variant="contained">
										<KeyboardReturnIcon></KeyboardReturnIcon>
										Volver
									</Button>
								</Link>
							)}
							<div className={styles.cardCategory}>
								<div>
									<h1 className={styles.textCenter}>{Categoria}</h1>
								</div>
								<Grid container className={styles.centradoItems}>
									{Options.filter((obj) => obj.category === Categoria)
										.slice(0, Categorys.length > 1 ? 3 : undefined)
										.map((item) => {
											return (
												<Grid key={item.id} item>
													<ItemList key={item.id} grupo={Categoria} item={item} />
												</Grid>
											);
										})}
								</Grid>
							</div>
						</div>
					);
				})
			)}
		</div>
	);
};

export default ItemListContainer;
