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
		<div>
			{Loading ? (
				<Skeleton animation="wave" variant="rectangular" width={410} height={300} />
			) : (
				Categorys.map((Categoria, i) => {
					return (
						<div key={i}>
							{BtnVolver && (
								<Link to="/home" className={styles.linkReverse}>
									<Button variant="contained" className={styles.buttonReverse}>
										<KeyboardReturnIcon></KeyboardReturnIcon>
										Volver
									</Button>
								</Link>
							)}
							<div className={styles.cardCategory}>
								<div>
									<h1 className={styles.textCenter}>{Categoria}</h1>
								</div>
								<Grid container spacing={4}>
									{Options.map((item) => {
										if (item.category == Categoria) {
											return (
												<Grid key={item.id} item xs={2}>
													<ItemList key={item.id} grupo={Categoria} item={item} />
												</Grid>
											);
										}
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
