import ItemListContainer from '../ItemListContainer';
import styles from './ViewHome.module.css';
import ButtonCategory from '../ButtonCategory';
const ViewHome = () => {
	return (
		<>
			<div className={styles.divTitle}>
				<h1 className={styles.Title}>TU MEJOR AMIGO MERECE LO MEJOR</h1>
			</div>
			<div className={styles.divCategory}>
				<ButtonCategory url="/productos/Alimento" key={1} img="../src/assets/img/comida.jpg" text="ALIMENTOS" identify="CardDog" />
				<ButtonCategory url="/productos/Ropa" key={2} img="../src/assets/img/ropa.jpg" text="ROPA" identify="CardRopa" />
				<ButtonCategory url="/productos/Juguetes" key={3} img="../src/assets/img/juguetes.jpg" text="JUGUETES" identify="CardJuguete" />
				<ButtonCategory url="/productos/Otros" key={4} img="../src/assets/img/otros.jpg" text="OTROS" identify="CardOtros" />
			</div>
			<div className={styles.divCards}>
				<ItemListContainer key="viewHome" />
			</div>
		</>
	);
};

export default ViewHome;
